import Cookies from 'js-cookie'
import create from 'zustand'
import { persist } from 'zustand/middleware'

interface Token  {
  sub: number;
}

interface ICustumer {
  loading: boolean
  token: Token 
  auth: boolean
}


export const useCustumers = create<ICustumer>(
  persist(
    (set, get) => ({
      loading: false,
      token: {} as Token,
      auth: Boolean(Cookies.get('JWT')),
    }),
    { name: 'custumers' }
  )
)
