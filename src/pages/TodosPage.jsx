import React, { useContext } from 'react'
import useAuthGuard from '../hooks/useAuthGuard'
import { store } from '../Store'
import TodoList from '../components/TodoList'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import styles from './TodosPage.module.css'

export default function TodosPage() {
  const { auth } = useAuthGuard()
  const { todos } = useContext(store)

  if (auth === null) return <p>loading</p>

  return (
    <div className={styles.container}>
      <div className={styles.todosContainer}>
        <Typography className={styles.header} variant='h3' gutterBottom>
          My Tasks
        </Typography>
        <Card className={styles.todos}>
          <TodoList todos={todos} />
        </Card>
      </div>
      <div className={styles.gradiantContainer}>
        <div className={styles.notgradiant}></div>
        <div className={styles.gradiant}></div>
      </div>
    </div>
  )
}
