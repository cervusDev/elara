import { AuthSlice } from './index'

export interface IAuth {
  loading: boolean
}

export const Auth: AuthSlice<IAuth> = (set, get) => ({
  loading: false
})
