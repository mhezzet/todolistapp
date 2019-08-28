import React, { useContext } from 'react'
import TodoForm from '../components/TodoForm'
import { store } from '../Store'
import useAuthGuard from '../hooks/useAuthGuard'
import Typography from '@material-ui/core/Typography'
import styles from './CreateTodoPage.module.css'
import Loading from '../components/Loading'

export default function CreateTodoPage() {
  const { auth } = useAuthGuard()
  const { addTodo } = useContext(store)

  if (auth === null) return <Loading />

  return (
    <div className={styles.container}>
      <Typography
        style={{ marginTop: 30 }}
        align='center'
        variant='h4'
        gutterBottom
      >
        Add a New Task
      </Typography>
      <TodoForm type='ADD' onSubmit={values => addTodo(values)} />
    </div>
  )
}
