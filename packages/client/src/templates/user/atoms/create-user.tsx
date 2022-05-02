import { useRef } from 'react'

import { Box, Link } from '@mui/material'
import DialogGuide, { DialogInperativeHandle } from 'global/guides/dialogGuide'

import { CreateUserInputs } from './form'

export function CreateUserForm() {
  const ref = useRef<DialogInperativeHandle>(null)
  return (
    <Box>
      <Link variant='button' sx={{ cursor: 'pointer', color: '#265b83' }} onClick={() => ref.current?.open()}>
        Create account
      </Link>

      <DialogGuide title='Create account' ref={ref} onSubmit={() => {}} width='650px' height='auto'>
        <CreateUserInputs />
      </DialogGuide>
    </Box>
  )
}
