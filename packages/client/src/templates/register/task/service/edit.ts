import { useRef } from "react"
import { DialogInperativeHandle } from 'global/guides/dialogGuide'
import { SubmitHandler } from "react-hook-form"
import { tasks } from 'service'
import { GridRenderCellParams } from "@mui/x-data-grid"
import { Task } from "@types"
import { queryClient } from "providers/react-query"

export type Props = GridRenderCellParams<any, Task>

export function EditTaskService({ row }: Props) {
  const ref = useRef<DialogInperativeHandle>(null)
  
  const { mutate, isLoading } = tasks.mutations.useUpdate()

  const handleSubmit: SubmitHandler<Task> = data => {
    mutate([row.id, data], {
      onSuccess: () => {
        queryClient.invalidateQueries(['tasks', row.userId])
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
  
  return {ref, handleClick, handleSubmit, isLoading}
}