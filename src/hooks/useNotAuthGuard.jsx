import { useContext } from 'react'
import { store } from '../Store'
import history from '../history'

export default function useNotAuthGuard() {
  const { auth } = useContext(store)

  if (auth === null) return { auth: null }
  else if (!auth) return { auth: false }
  else if (auth) history.push('/')
  return { auth: true }
}
