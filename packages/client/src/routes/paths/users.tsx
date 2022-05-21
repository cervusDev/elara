import { AppNavbar } from 'global/components/header'
import { IRoutes } from '../types'
import { Users } from 'pages/users'

export const users: IRoutes = {
  path: '/users',
  element: (
    <>
      <AppNavbar />
      <Users/>
    </>
  )
}
