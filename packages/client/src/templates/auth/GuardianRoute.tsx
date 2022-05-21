import React from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from 'hooks'

type Props = {
  children: React.ReactNode
}

export function GuardianRoute({ children }: Props) {
  const { auth } = useAuth()
  console.log('auth', auth)
  return <React.Fragment>{auth ? children : <Navigate to='/' />}</React.Fragment>
}
