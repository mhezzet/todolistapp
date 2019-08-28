import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDrcFkkRkc-objn6ZvmElA3ilXS3qUaE2s',
  authDomain: 'todoapp-9265b.firebaseapp.com',
  databaseURL: 'https://todoapp-9265b.firebaseio.com',
  projectId: 'todoapp-9265b',
  storageBucket: 'todoapp-9265b.appspot.com',
  messagingSenderId: '212205627101',
  appId: '1:212205627101:web:8b98ddde931fd33a'
}

firebase.initializeApp(firebaseConfig)

export default firebase
