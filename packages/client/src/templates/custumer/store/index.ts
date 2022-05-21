import create, { GetState, SetState } from 'zustand'

import { Auth, IAuth } from './login'

export type AuthStore = IAuth

export type AuthSlice<T> = (set: SetState<AuthStore>, get: GetState<AuthStore>) => T

export const useAuth = create<AuthStore>((set, get) => ({
  ...Auth(set, get)
}))
