import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default function TodoForm({
  errorMessage,
  type,
  onSubmit,
  initialValue = { title: '', content: '' }
}) {
  const [values, setValues] = React.useState(initialValue)

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}
      onSubmit={e => e.preventDefault()}
    >
      <TextField
        id='title'
        label='Title'
        value={values.title}
        onChange={handleChange('title')}
        margin='normal'
        variant='outlined'
        type='text'
        required
      />
      <TextField
        id='content'
        label='Content'
        value={values.content}
        onChange={handleChange('content')}
        margin='normal'
        variant='outlined'
        type='text'
        required
      />
      <p>{errorMessage}</p>
      <Button type='submit' onClick={() => onSubmit(values)}>
        {type}
      </Button>
    </form>
  )
}
