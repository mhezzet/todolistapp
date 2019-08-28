import React, { createContext, useReducer, useEffect } from 'react'
import firebase from './firebase'

export const store = createContext()

const initialState = {
  auth: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-auth':
      return { ...state, auth: action.payload }
    default:
      return state
  }
}

export default function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log('state', state)

  useEffect(
    () =>
      firebase.auth().onAuthStateChanged(user => {
        console.log('user', user)
        if (!user) dispatch({ type: 'set-auth', payload: false })
        else dispatch({ type: 'set-auth', payload: true })
      }),
    []
  )

  return <store.Provider value={state}>{children}</store.Provider>
}
