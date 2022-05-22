import { ApiService } from 'service/api.service'
import { Task } from '@types'
import { useMutation, useQuery } from 'react-query';
import { ErrorHandler as Err } from 'service'
import { useUsers } from 'global/store/user'

export namespace tasks {
  export const endpoint = new ApiService<Task>('tasks');

  type Post = Parameters<typeof endpoint.post>
  type Patch = Parameters<typeof endpoint.patch>
  type Delete = Parameters<typeof endpoint.delete>

  export function useFetching() {
    const { userId } = useUsers()
    return useQuery(['tasks', userId], () => endpoint.getParam(userId as number))
  }

  export namespace mutations {
    export function useAdd() {
      return useMutation<Task, Err, Post>(data => endpoint.post(...data))
    }

    export function useUpdate() {
      return useMutation<Task, Err, Patch>(data => endpoint.patch(...data))
    }

    export function useRemove() {
      return useMutation<void, Err, Delete>(data => endpoint.delete(...data))
    }
  }
  
}