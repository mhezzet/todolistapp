import React, { useContext } from 'react'
import TodoForm from '../components/TodoForm'
import { store } from '../Store'
import useAuthGuard from '../hooks/useAuthGuard'

export default function CreateTodoPage() {
  const { auth } = useAuthGuard()
  const { addTodo } = useContext(store)

  if (auth === null) return <p>loading</p>

  return (
    <div>
      <TodoForm type='ADD' onSubmit={values => addTodo(values)} />
    </div>
  )
}
