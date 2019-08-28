import React, { useContext } from 'react'
import useAuthGuard from '../hooks/useAuthGuard'
import { store } from '../Store'
import TodoList from '../components/TodoList'

export default function TodosPage() {
  const { auth } = useAuthGuard()
  const { todos } = useContext(store)

  if (auth === null) return <p>loading</p>

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}
