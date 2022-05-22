import { useRef } from "react"
import { SubmitHandler } from 'react-hook-form'
import { DialogInperativeHandle } from 'global/guides/dialogGuide'
import { GridRenderCellParams } from "@mui/x-data-grid"
import { tasks } from 'service'
import { queryClient } from "providers/react-query"
import { useUsers } from 'global/store/user'
import { Task } from '@types'

export type Props = GridRenderCellParams<any, Task>

export function DeleteTaskService({ row }: Props) {
  const ref = useRef<DialogInperativeHandle>(null)
  const { mutate, isLoading } = tasks.mutations.useRemove()
  const { userId } = useUsers()

  const handleSubmit: SubmitHandler<Task> = () => {
    mutate([row.id], {
      onSuccess: () => {
        queryClient.invalidateQueries(['tasks', userId])
        ref.current?.close()
      },
      onError: () => {
        ref.current?.close()
      }
    })
  }

  const handleClick = () => {
    ref.current?.open()
  }
  
  return { ref, handleSubmit, handleClick, isLoading }
}