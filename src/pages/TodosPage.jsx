import React, { useContext } from 'react'
import useAuthGuard from '../hooks/useAuthGuard'
import { store } from '../Store'
import TodoList from '../components/TodoList'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import AddIcon from '@material-ui/icons/Add'
import styles from './TodosPage.module.css'
import history from '../history'
import WarningIcon from '@material-ui/icons/Warning'
import Loading from '../components/Loading'

export default function TodosPage() {
  const { auth } = useAuthGuard()
  const { todos } = useContext(store)

  if (auth === null) return <Loading />

  return (
    <div className={styles.container}>
      <div className={styles.todosContainer}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.4rem'
          }}
        >
          <Typography className={styles.header} variant='h4' gutterBottom>
            My Tasks
          </Typography>
          <Button
            onClick={() => history.push('/todos/new')}
            variant='contained'
            color='primary'
          >
            <AddIcon />
            ADD
          </Button>
        </div>
        <Card className={styles.todos}>
          {todos.length === 0 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '90%'
              }}
            >
              <WarningIcon style={{ marginRight: 3 }} />
              <Typography variant='body1'>there is no tasks</Typography>
            </div>
          )}
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
