import { AppNavbar } from 'global/components/header'
import { IRoutes } from '../types'
import { Users } from 'pages/users'
import { Fragment } from 'react'

export const users: IRoutes = {
  path: '/users',
  element: (
    <Fragment>
      <AppNavbar />
      <Users/>
    </Fragment>
  )
}
