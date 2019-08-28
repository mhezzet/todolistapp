import React, { useContext } from 'react'
import TodoForm from '../components/TodoForm'
import { store } from '../Store'
import useAuthGuard from '../hooks/useAuthGuard'
import Typography from '@material-ui/core/Typography'
import style from './EditTodoPage.module.css'
import Loading from '../components/Loading'

export default function EditTodoPage({ match }) {
  const { auth } = useAuthGuard()
  const { todos, editTodo } = useContext(store)
  const todo = todos.find(todo => todo.id === match.params.id)

  if (auth === null) return <Loading />

  return (
    <div className={style.container}>
      <Typography
        style={{ marginTop: 30 }}
        align='center'
        variant='h4'
        gutterBottom
      >
        Edit the Task
      </Typography>
      <TodoForm
        type='EDIT'
        initialValue={todo}
        onSubmit={values => editTodo(values.id, values)}
      />
    </div>
  )
}
