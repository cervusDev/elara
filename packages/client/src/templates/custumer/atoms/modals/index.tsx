import { UserAddService as useService } from 'templates/custumer/service/add'

import { Box, Link } from '@mui/material'
import DialogGuide from 'global/guides/dialogGuide'

import { CreateCustumerInputs } from '../form'

export function CreateCustumerModal() {
  const { handleClick, handleSubmit, ref, isLoading } = useService()

  return (
    <Box>
      <Link variant='button' sx={{ cursor: 'pointer', color: '#265b83' }} onClick={handleClick}>
        Create account
      </Link>
      <DialogGuide title='Create account' ref={ref} onSubmit={handleSubmit} loading={isLoading} width='650px' height='auto'>
        <CreateCustumerInputs />
      </DialogGuide>
    </Box>
  )
}
