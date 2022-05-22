import { AxiosError } from 'axios'
import { useCallback } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router'
import jwt_decode from 'jwt-decode'
import Cookies from 'js-cookie'
import { queryClient } from 'providers/react-query'
import { Api } from 'service/'
import { createContext } from 'react'
import { useCustumers } from 'global/store/custumer'

export interface IAuthContext {
  handleLogout: () => void
  handleLogin: SubmitHandler<any>
}

export type Login = {
  email: string
  password: string
}

export const COOKIE = {
  JWT: 'JWT'
}

export const AuthContext = createContext({} as IAuthContext)

export const AuthContextProvider: React.FC = ({ children }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleLogin: SubmitHandler<Login> = useCallback(
    async data => {
      try { 
        Cookies.remove('JWT')
        queryClient.invalidateQueries('users')

        useCustumers.setState({ loading: true })

        const { token } = await Api.login.post(data)

        Cookies.set('JWT', token, { expires: 1, sameSite: 'lax' })
        const decode = jwt_decode<any>(token)


        useCustumers.setState({ token: decode })
        useCustumers.setState({ auth: true })

        useCustumers.setState({ loading: false })

        navigate('/users')

      } catch (error) {
        const { response } = error as AxiosError
        if (response && response.status === 401) {
          useCustumers.setState({ loading: false })
        }
      }
    },
    [navigate]
  )

  async function handleLogout() {
    Cookies.remove(COOKIE.JWT)

    if (pathname !== '/') {
      navigate('/')
    }
    useCustumers.setState({ auth: false })
  }

  const value: IAuthContext = {
    handleLogin,
    handleLogout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
