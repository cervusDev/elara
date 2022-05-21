import { AxiosError } from 'axios'
import { useCallback, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router'

import Cookies from 'js-cookie'
import { queryClient } from 'providers/react-query'
import { Api } from 'service/'
import { createContext } from 'react'

export interface IAuthContext {
  auth: boolean
  loading: boolean
  handleLogin: SubmitHandler<any>
  handleLogout: () => void
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
  const [loading, setLoading] = useState(false)
  const [auth, setAuth] = useState(Boolean(Cookies.get(COOKIE.JWT)))

  const handleLogin: SubmitHandler<Login> = useCallback(
    async data => {
      try {
        Cookies.remove(COOKIE.JWT)

        queryClient.invalidateQueries('users')
        setLoading(false)

        await Api.login.post(data)

        Cookies.set(COOKIE.JWT, 'true')
        setAuth(true)

        setLoading(false)
        navigate('/users')
      } catch (error) {
        const { response } = error as AxiosError
        console.log("error", response)
        if (response && response.status === 401) {
          setLoading(false)
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
    setAuth(false)
  }

  const value: IAuthContext = {
    auth,
    loading,
    handleLogin,
    handleLogout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
