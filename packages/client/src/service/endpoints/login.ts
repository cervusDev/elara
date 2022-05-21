import { ApiService } from '../api.service'

type Token = {
  token: string
}

type Login = {
  email: string
  password: string
}

export const login = new ApiService<Login, Token>('custumers/session');
