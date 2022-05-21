import { Box, Button } from '@mui/material'
import DialogGuide from 'global/guides/dialogGuide'
import { CreateUserInputs } from '../forms/create-user'
import { UserAddService as useService } from '../../service/add'

export function AddUser() {
  const { handleClick, handleSubmit, ref, isLoading } = useService()

  return (
    <Box>
    <Button color='info' variant='contained' onClick={handleClick}>
      Novo Usuário
    </Button>
    <DialogGuide 
      ref={ref}
      loading={isLoading}
      width='38rem'
      height='auto'
      title='Novo Usuário'
      onSubmit={handleSubmit}
      // validationSchema={}
    >
      <CreateUserInputs />
    </DialogGuide>
  </Box>
  )
}