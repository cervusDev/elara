import { ReactNode } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { SxProps } from '@mui/system'
import * as Yup from 'yup'

interface IProps {
  sx?: SxProps
  open: boolean
  width?: string
  height?: string
  loading?: boolean
  defaultValues?: any
  submitLabel?: string
  children?: ReactNode
  unSubmited?: boolean
  title: string | ReactNode
  onSubmit?: SubmitHandler<any>
  onClose: (...args: any) => void
  validationSchema?: Yup.AnyObjectSchema
}

const Props: SxProps = { bgcolor: '#f8f8f8' }
const development = process.env.NODE_ENV === 'development'

export function DialogGuide({
  open,
  title,
  onClose,
  children,
  onSubmit,
  sx = Props,
  width = '720px',
  loading = false,
  validationSchema,
  defaultValues = {},
  unSubmited = false,
  submitLabel = 'Register',
  height = 'calc(100vh - 18rem)'
}: IProps) {
  const schema = validationSchema || Yup.object().shape({})
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) })
  return (
    <Dialog
      open={open}
      maxWidth='xl'
      scroll='paper'
      PaperProps={{ sx }}
      onClose={() => onClose()}
      aria-labelledby='scroll-dialog-title'
      aria-describedby='scroll-dialog-description'
    >
      {!unSubmited && onSubmit && (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <DialogTitle id='scroll-dialog-title'>
              <Box display='flex' px={4} justifyContent='space-between' alignItems='center'>
                {title}
              </Box>
            </DialogTitle>
            <DialogContent id='scroll-dialog-description' tabIndex={-1} dividers>
              <Box width={width} px={4} py={2} height={height}>
                {children}
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose} color='info' disabled={loading}>
                Cancelar
              </Button>
              <Box sx={{ m: 1, position: 'relative' }}>
                <Button type='submit' variant='contained' disabled={loading}>
                  {submitLabel}
                </Button>
                {loading && (
                  <CircularProgress
                    sx={{
                      position: 'absolute',
                      top: '20%',
                      padding: '10px',
                      left: '40%',
                      marginTop: '-8px',
                      marginLeft: '-8px'
                    }}
                  />
                )}
              </Box>
            </DialogActions>
          </form>
        </FormProvider>
      )}
      {unSubmited && !onSubmit && (
        <FormProvider {...methods}>
          <DialogTitle id='scroll-dialog-title'>
            <Box display='flex' px={4} justifyContent='space-between' alignItems='center'>
              {title}
            </Box>
          </DialogTitle>
          <DialogContent id='scroll-dialog-description' tabIndex={-1} dividers>
            <Box width={width} px={4} py={2} flexGrow={1} height={height}>
              {children}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Fechar</Button>
          </DialogActions>
        </FormProvider>
      )}
      {development && <DevTool control={methods.control} />}
    </Dialog>
  )
}
