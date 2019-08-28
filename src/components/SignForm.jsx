import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export default function SignForm({
  errorMessage,
  type,
  onSubmit,
  initialValue = { password: '', email: '' }
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
        id='email'
        label='Email'
        value={values.email}
        onChange={handleChange('email')}
        margin='normal'
        variant='outlined'
        type='email'
        required
      />
      <TextField
        id='password'
        label='Password'
        value={values.password}
        onChange={handleChange('password')}
        margin='normal'
        variant='outlined'
        type='password'
        required
      />
      <Typography color='error' variant='subtitle1' gutterBottom>
        {errorMessage}
      </Typography>
      <Button
        variant='contained'
        style={{ alignSelf: 'center', marginTop: 15 }}
        type='submit'
        onClick={() => onSubmit(values)}
      >
        {type}
      </Button>
    </form>
  )
}
