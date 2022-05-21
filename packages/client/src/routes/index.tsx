import { Route, Routes } from 'react-router'

import { home } from './paths/home'
import { users } from './paths/users'
import { task } from './paths/task'

export function Routers() {
  return (
    <Routes>
      <Route {...home} />
      <Route {...users} />
      <Route {...task} />
    </Routes>
  )
}
