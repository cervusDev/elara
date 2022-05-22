import create from 'zustand'
import { persist } from 'zustand/middleware'

interface IUser {
  userId: number | null
}

export const useUsers = create<IUser>(
  persist(
    (set, get) => ({
      userId: null,
    }),
    { name: 'users' }
  )
)
