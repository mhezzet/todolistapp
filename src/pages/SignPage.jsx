import React, { useState } from 'react'
import SignForm from '../components/SignForm'
import firebase from '../firebase'
import history from '../history'
import useNotAuthGuard from '../hooks/useNotAuthGuard'
import styles from './SignPage.module.css'
import Typography from '@material-ui/core/Typography'
import Loading from '../components/Loading'

export default function SignPage() {
  const [errorMessage, setErrorMessage] = useState('')
  const type = history.location.pathname === '/signin' ? 'SIGN IN' : 'SIGN UP'

  const { auth } = useNotAuthGuard()
  if (auth === null) return <Loading />

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
      <div className={styles.card}>
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
        {type === 'SIGN IN' ? (
          <Typography
            style={{ margin: '0.2rem', cursor: 'pointer' }}
            onClick={() => history.push('/signup')}
            color='primary'
            align='center'
            variant='subtitle1'
            gutterBottom
          >
            you are new? SIGNUP
          </Typography>
        ) : (
          <Typography
            onClick={() => history.push('/signin')}
            style={{ margin: '0.2rem', cursor: 'pointer' }}
            align='center'
            color='primary'
            variant='subtitle1'
            gutterBottom
          >
            you already a user? LOGIN
          </Typography>
        )}
      </div>
    </div>
  )
}
