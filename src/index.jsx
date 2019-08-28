import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'

import * as serviceWorker from './serviceWorker'
import history from './history'
import TodosPage from './pages/TodosPage'
import CreateTodoPage from './pages/CreateTodoPage'
import EditTodoPage from './pages/EditTodoPage'
import SignPage from './pages/SignPage'
import NotFoundPage from './pages/NotFoundPage'
import Store, { store } from './Store'
import CssBaseline from '@material-ui/core/CssBaseline'
import 'typeface-roboto'
import Button from '@material-ui/core/Button'
import firebase from './firebase'

function App() {
  const { auth } = useContext(store)
  console.log(auth)
  return (
    <>
      <CssBaseline />
      {auth && (
        <Button
          onClick={() => firebase.auth().signOut()}
          style={{ position: 'absolute', right: 10, top: 10 }}
          color='primary'
        >
          SIGN OUT
        </Button>
      )}
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={TodosPage} />
          <Route exact path='/todos/new' component={CreateTodoPage} />
          <Route exact path='/todos/edit/:id' component={EditTodoPage} />
          <Route exact path='/signup' component={SignPage} />
          <Route exact path='/signin' component={SignPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  )
}

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById('root')
)

serviceWorker.register()
