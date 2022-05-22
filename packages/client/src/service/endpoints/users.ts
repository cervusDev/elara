import { useMutation, useQuery } from "react-query";
import { ApiService } from "service/api.service";
import { ErrorHandler as Err } from 'service';
import { useCustumers } from 'global/store/custumer'
import { User } from '@types'

export namespace users {

  export const endpoint = new ApiService<User>('users');

  type Post = Parameters<typeof endpoint.post>
  type Patch = Parameters<typeof endpoint.patch>
  type Delete = Parameters<typeof endpoint.delete>

  export function useFetching() {
    const { token: { sub: custumerId } } = useCustumers()
    return useQuery<User[]>(['users', custumerId], () => endpoint.getParam(custumerId).then(res => res), {
      enabled: custumerId > 0
    });
  }

  export namespace mutations {

    export function useAdd() {
      return useMutation<User, Err, Post>(data => endpoint.post(...data))
    }

    export function useRemove() {
      return useMutation<void, Err, Delete>(data => endpoint.delete(...data))
    }
  }  
}