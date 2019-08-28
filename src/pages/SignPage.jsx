import React, { useState } from 'react'
import SignForm from '../components/SignForm'
import firebase from '../firebase'
import hisory from '../history'
import useNotAuthGuard from '../hooks/useNotAuthGuard'

export default function SignPage() {
  const [errorMessage, setErrorMessage] = useState('')
  const type = hisory.location.pathname === '/signin' ? 'SIGN IN' : 'SIGN UP'

  const { auth } = useNotAuthGuard()
  if (auth === null) return <p>loading</p>

  const signIn = ({ email, password }) =>
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => firebase.auth().signInWithEmailAndPassword(email, password))
      .then(() => hisory.push('/'))
      .catch(error => setErrorMessage(error.message))

  const signUp = ({ email, password }) =>
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => hisory.push('/'))
      .catch(error => setErrorMessage(error.message))

  return (
    <div>
      <SignForm
        errorMessage={errorMessage}
        onSubmit={type === 'SIGN IN' ? signIn : signUp}
        type={type}
      />
    </div>
  )
}
