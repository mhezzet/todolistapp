import { useContext } from 'react'
import { store } from '../Store'
import history from '../history'

export default function useAuthGuard() {
  const { auth } = useContext(store)

  if (auth) return { auth: true }
  else if (auth === null) return { auth: null }
  else if (!auth) history.push('/signin')
  return { auth: false }
}
