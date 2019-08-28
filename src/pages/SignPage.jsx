import React, { useState } from 'react'
import SignForm from '../components/SignForm'
import firebase from '../firebase'
import history from '../history'
import useNotAuthGuard from '../hooks/useNotAuthGuard'
import Card from '@material-ui/core/Card'
import styles from './SignPage.module.css'
import Typography from '@material-ui/core/Typography'

export default function SignPage() {
  const [errorMessage, setErrorMessage] = useState('')
  const type = history.location.pathname === '/signin' ? 'SIGN IN' : 'SIGN UP'

  const { auth } = useNotAuthGuard()
  if (auth === null) return <p>loading</p>

  const signIn = ({ email, password }) =>
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => firebase.auth().signInWithEmailAndPassword(email, password))
      .then(() => history.push('/'))
      .catch(error => setErrorMessage(error.message))

  const signUp = ({ email, password }) =>
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => history.push('/'))
      .catch(error => setErrorMessage(error.message))

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Typography
          style={{ margin: '1rem' }}
          align='center'
          variant='h4'
          gutterBottom
        >
          {type === 'SIGN IN' ? 'Sign In' : 'Sign Up'}
        </Typography>
        <SignForm
          errorMessage={errorMessage}
          onSubmit={type === 'SIGN IN' ? signIn : signUp}
          type={type}
        />
      </Card>
    </div>
  )
}
