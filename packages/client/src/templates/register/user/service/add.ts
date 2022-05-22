import { useRef } from "react"
import { DialogInperativeHandle } from 'global/guides/dialogGuide'
import { SubmitHandler } from "react-hook-form"
import { users } from 'service'
import { queryClient } from "providers/react-query"
import { useCustumers } from 'global/store/custumer'

export function UserAddService() {
  const ref = useRef<DialogInperativeHandle>(null)
  const { token: { sub: custumerId } } = useCustumers()
  const { mutate, isLoading } = users.mutations.useAdd()

  const handleSubmit: SubmitHandler<any> = data => {
    const json = {
      custumerId: 1,
      ...data,
    }

    mutate([json], {
      onSuccess: () => {
        queryClient.invalidateQueries(['users', custumerId])
        ref.current?.close()
      },
      onError: (err) => {
        console.log(err)
        ref.current?.close()
      },
    })
  }

  const handleClick = () => {
    ref.current?.open()
  }
  
  return { ref, handleSubmit, handleClick, isLoading }
}