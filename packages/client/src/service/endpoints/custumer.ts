import { useMutation } from "react-query"
import { ApiService } from "service/api.service"
import { ErrorHandler as Err } from 'service'
import { ICustumer } from '@types'

export namespace custumer {
  export const endpoint = new ApiService<ICustumer>('custumers')

  type Post = Parameters<typeof endpoint.post>

  export namespace mutations {
    export function useAdd() {
      return useMutation<ICustumer, Err, Post>(data => endpoint.post(...data))
    }
  }
}