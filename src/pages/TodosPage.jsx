import React, { useContext } from 'react'
import useAuthGuard from '../hooks/useAuthGuard'

export default function TodosPage() {
  const { auth } = useAuthGuard()

  if (auth === null) return <p>loading</p>

  return <div>iam todos page</div>
}
