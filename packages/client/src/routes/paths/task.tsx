import { AppNavbar } from 'global/components/header'
import { IRoutes } from '../types'
import { Tasks } from 'pages/tasks'

export const task: IRoutes = {
  path: '/tasks',
  element: (
    <>
      <AppNavbar />
      <Tasks />
    </>
  )
}
