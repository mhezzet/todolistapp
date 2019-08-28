import React, { createContext, useReducer, useEffect } from 'react'
import firebase from './firebase'
import history from './history'

const db = firebase.firestore()
export const store = createContext()

const initialState = {
  auth: null,
  todos: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-auth':
      return { ...state, auth: action.payload }
    case 'set-todos':
      return { ...state, todos: action.payload }
    default:
      return state
  }
}

export default function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) dispatch({ type: 'set-auth', payload: false })
      else dispatch({ type: 'set-auth', payload: true })
      if (user) {
        db.collection('todos')
          .where('userID', '==', user.uid)
          .orderBy('timestamp', 'desc')
          .onSnapshot(snapshot => {
            const todos = []
            snapshot.forEach(doc =>
              todos.push({ ...doc.data(), id: doc.ref.id })
            )
            dispatch({ type: 'set-todos', payload: todos })
          })
      }
    })
  }, [])

  console.log(state.todos)

  const addTodo = values => {
    const userID =
      firebase.auth().currentUser && firebase.auth().currentUser.uid

    const todo = {
      userID,
      completed: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      ...values
    }

    db.collection('todos')
      .add(todo)
      .then(() => history.push('/'))
  }

  const deleteTodo = id =>
    db
      .collection('todos')
      .doc(id)
      .delete()

  const editTodo = (id, values) => {
    let todo = state.todos.find(todo => todo.id === id)

    todo = { ...todo, ...values }

    db.collection('todos')
      .doc(id)
      .set(todo)
      .then(() => history.push('/'))
  }

  return (
    <store.Provider value={{ ...state, addTodo, deleteTodo, editTodo }}>
      {children}
    </store.Provider>
  )
}
