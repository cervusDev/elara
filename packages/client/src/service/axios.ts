import axios from 'axios'

import Cookies from 'js-cookie'

const baseURL = import.meta.env.VITE_BASE_URL
const CODE = import.meta.env.VITE_COOKIE_CODE

const COOKIE = { CODE }

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use(async config => {
  const token = Cookies.get(COOKIE.CODE)

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

axiosInstance.interceptors.response.use(
  response => {
    return response.data.data
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          const token = Cookies.get(COOKIE.CODE)

          if (token) {
            Cookies.remove(COOKIE.CODE)
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
