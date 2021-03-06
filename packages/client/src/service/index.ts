export * from './endpoints/login'
export * from './endpoints/users'
export * from './endpoints/custumer'
export * from './endpoints/task'
export * as Api from '.'


export type ErrorHandler = {
  response: {
    data: {
      code: number
      message: string
    }
  }
}
