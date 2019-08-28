import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'

import * as serviceWorker from './serviceWorker'
import history from './history'
import TodosPage from './pages/TodosPage'
import CreateTodoPage from './pages/CreateTodoPage'
import EditTodoPage from './pages/EditTodoPage'
import SignPage from './pages/SignPage'
import NotFoundPage from './pages/NotFoundPage'
import Store from './Store'
import CssBaseline from '@material-ui/core/CssBaseline'
import 'typeface-roboto'

function App() {
  return (
    <>
      <CssBaseline />
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
