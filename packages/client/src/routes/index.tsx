import { Route, Routes } from 'react-router'

import { home } from './paths/home'

export function Routers() {
  return (
    <Routes>
      <Route {...home} />
    </Routes>
  )
}
