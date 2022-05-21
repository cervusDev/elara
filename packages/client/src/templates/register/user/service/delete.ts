import { GridRenderCellParams } from "@mui/x-data-grid";
import { useRef } from "react";
import { DialogInperativeHandle } from 'global/guides/dialogGuide'
import { SubmitHandler } from "react-hook-form";
import { users } from 'service'
import { queryClient } from "providers/react-query";

export type Props = GridRenderCellParams<any, any>


export function UserDeleteService({ row }: Props) {
  const ref = useRef<DialogInperativeHandle>(null)
  const { mutate, isLoading } = users.mutations.useRemove()
  const custumerId= 1
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

  const handleClick = () => {}

  return { ref, handleSubmit, handleClick, isLoading }

}