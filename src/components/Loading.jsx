import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

export default function Loading() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <CircularProgress />
    </div>
  )
}
