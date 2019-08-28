import React, { useContext } from 'react'
import TodoForm from '../components/TodoForm'
import { store } from '../Store'
import useAuthGuard from '../hooks/useAuthGuard'

export default function EditTodoPage({ match }) {
  const { auth } = useAuthGuard()
  const { todos, editTodo } = useContext(store)
  const todo = todos.find(todo => todo.id === match.params.id)

  if (auth === null) return <p>loading</p>
  if (!todo) return <p>no such a todo</p>

  return (
    <div>
      <TodoForm
        type='EDIT'
        initialValue={todo}
        onSubmit={values => editTodo(values.id, values)}
      />
    </div>
  )
}
