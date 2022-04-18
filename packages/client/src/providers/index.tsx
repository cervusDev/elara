// import { AuthContextProvider } from 'context/Auth'
// import { CustumerContextProvider } from 'context/Custumer'
// import { BehaviorFormContextProvider } from 'context/PrimeiroAcesso'
import { BrowserRouter } from 'react-router-dom'

import { ReactQuery } from './react-query'

interface IProps {
  children: React.ReactNode
}

export function Providers({ children }: IProps) {
  return (
    <ReactQuery>
      <BrowserRouter>{children}</BrowserRouter>
    </ReactQuery>
  )
}
