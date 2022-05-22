import { useRef } from "react"
import { DialogInperativeHandle } from 'global/guides/dialogGuide'
import { SubmitHandler } from "react-hook-form"
import { Task } from '@types'
import { tasks } from 'service'
import { queryClient } from "providers/react-query"
import { useUsers } from 'global/store/user'

export function AddTaskService() {
  const ref = useRef<DialogInperativeHandle>(null)
  const { mutate, isLoading } = tasks.mutations.useAdd()
  const { userId } = useUsers()
  
  const handleSubmit: SubmitHandler<Task> = ({ userId: user, ...rest }) => {
    const json = {
      userId: +user,
      ...rest
    }

    mutate([json], {
      onSuccess: () => {
        queryClient.invalidateQueries(['tasks', userId])
        ref.current?.close()
      },
      onError: () => {
        ref.current?.close()
      },
    })
  }

  const handleClick = () => {
    ref.current?.open()
  }
  
  return { ref, handleSubmit, handleClick, isLoading }
}