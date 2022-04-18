import { useMemo } from 'react'

import { Box, LinearProgress } from '@mui/material'
import { FormGuide } from 'global/guide/formguide'
import { FormGuideProps } from 'global/types'

import { useAuth } from './hooks/index'

export function FormularioLogin() {
  const { loading } = useAuth()

  const fields = useMemo<FormGuideProps>(() => {
    return [{ nameRef: 'email', label: 'email' }]
  }, [])

  return (
    <Box>
      {loading && <LinearProgress />}
      <FormGuide fields={fields} />
    </Box>
  )
}
