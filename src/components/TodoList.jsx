import React, { useContext } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import history from '../history'

import { store } from '../Store'

export default function TodoList({ todos }) {
  const { editTodo, deleteTodo } = useContext(store)
  return (
    <List>
      {todos.map(todo => (
        <ListItem
          button
          onClick={() => editTodo(todo.id, { completed: !todo.completed })}
          key={todo.id}
          dense
        >
          <ListItemIcon>
            <Checkbox
              edge='start'
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText primary={todo.title} secondary={todo.content} />
          <ListItemSecondaryAction>
            <IconButton
              onClick={() => history.push(`/todos/edit/${todo.id}`)}
              edge='end'
              aria-label='comments'
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => deleteTodo(todo.id)}
              edge='end'
              aria-label='comments'
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}
