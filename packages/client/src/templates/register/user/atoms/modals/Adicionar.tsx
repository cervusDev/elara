import { Box, Button } from '@mui/material'
import DialogGuide from 'global/guides/dialogGuide'
import { CreateUserInputs } from '../forms/create-user'
import { UserAddService as useService } from '../../service/add'
import { schema } from '../../constants/yup'

export function AddUser() {
  const { handleClick, handleSubmit, ref, isLoading } = useService()

  return (
    <Box>
    <Button color='info' variant='contained' onClick={handleClick}>
      new user
    </Button>
    <DialogGuide 
      ref={ref}
      width='38rem'
      height='auto'
      submitLabel='register'
      loading={isLoading}
      title='New User'
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <CreateUserInputs />
    </DialogGuide>
  </Box>
  )
}