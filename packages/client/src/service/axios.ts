import axios from 'axios'

import Cookies from 'js-cookie'

const baseURL = import.meta.env.VITE_BASE_URL

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use(async config => {
  const token = Cookies.get('JWT')

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

axiosInstance.interceptors.response.use(
  response => {
    return response.data
  },

  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          const { path } = error.response.data

          if (path === '/v1/custumers/session') {
            Cookies.remove('JWT')
          } else {
            Cookies.remove('JWT')
            window.location.href = import.meta.env.VITE_LOGIN
          }

          break
        default:
          break
      }
    }
    return Promise.reject(error)
  }
)
