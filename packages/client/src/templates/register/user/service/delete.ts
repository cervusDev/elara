import { GridRenderCellParams } from "@mui/x-data-grid";
import { useRef } from "react";
import { DialogInperativeHandle } from 'global/guides/dialogGuide'
import { SubmitHandler } from "react-hook-form";
import { users } from 'service'
import { queryClient } from "providers/react-query";
import { useCustumers } from 'global/store/custumer'

export type Props = GridRenderCellParams<any, any>


export function UserDeleteService({ row }: Props) {
  const ref = useRef<DialogInperativeHandle>(null)
  const { token: { sub: custumerId } } = useCustumers()
  const { mutate, isLoading } = users.mutations.useRemove()
  
  const handleSubmit: SubmitHandler<any> = data => {
    mutate([row.id], {
      onSuccess: () => {
        queryClient.invalidateQueries(['users', custumerId])
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