import { useRef } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { custumer } from 'service'
import { DialogInperativeHandle } from 'global/guides/dialogGuide'
import { ICustumer } from '@types'

export function UserAddService() {
  const ref = useRef<DialogInperativeHandle>(null)
  const { mutate, isLoading } = custumer.mutations.useAdd()
  
  const handleSubmit: SubmitHandler<ICustumer> = data => {
    console.log(data)

    mutate([data], {
      onSuccess: () => {
        console.log('success')
        ref.current?.close()
      },
      onError: (error) => {
        console.log(error.response.data.message)
        ref.current?.close()
      },
    })
  }

  const handleClick = () => {
    ref.current?.open()
  }

  return { ref, handleSubmit, handleClick, isLoading }
}
