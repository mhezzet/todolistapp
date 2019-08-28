import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import history from '../history'

export default function TodoForm({
  type,
  onSubmit,
  initialValue = { title: '', content: '' }
}) {
  const [values, setValues] = React.useState(initialValue)

  React.useEffect(() => {
    if (type === 'EDIT') setValues(initialValue)
  }, [initialValue, type])

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
      <div
        style={{
          display: 'flex',
          margin: 'auto',
          justifyContent: 'center',
          marginTop: 15
        }}
      >
        <Button
          variant='contained'
          type='submit'
          style={{ marginRight: 15 }}
          onClick={() => {
            if (values.content === '' || values.title === '') return
            onSubmit(values)
          }}
        >
          {type}
        </Button>
        <Button variant='contained' onClick={() => history.push('/')}>
          CANCEL
        </Button>
      </div>
    </form>
  )
}
