import { AuthContextProvider } from 'context/Auth'
import { BrowserRouter } from 'react-router-dom'
import { ReactQuery } from './react-query'

interface IProps {
  children: React.ReactNode
}

export function Providers({ children }: IProps) {
  return (
    <ReactQuery>
      <BrowserRouter>
        <AuthContextProvider>{children}</AuthContextProvider>
      </BrowserRouter>
    </ReactQuery>
  )
}
