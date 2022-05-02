import { ReactNode, forwardRef, useCallback, useImperativeHandle, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { SxProps } from '@mui/system'
import * as Yup from 'yup'

export interface DialogGuideProps {
  children?: ReactNode
  loading?: boolean
  title: string | ReactNode
  submitLabel?: string
  width?: string
  height?: string
  sx?: SxProps
  unSubmited?: boolean
  onSubmit?: SubmitHandler<any>
  defaultValues?: any
  validationSchema?: Yup.AnyObjectSchema
}

export interface DialogInperativeHandle {
  open: () => void
  close: () => void
  toggle: () => void
}

const Props: SxProps = { bgcolor: '#f8f8f8' }

const DialogInperativeGuide: React.ForwardRefRenderFunction<DialogInperativeHandle, DialogGuideProps> = (
  {
    children,
    title,
    onSubmit,
    loading = false,
    submitLabel = 'Cadastrar',
    width = '720px',
    height = 'calc(100vh - 18rem)',
    sx = Props,
    unSubmited = false,
    defaultValues = {},
    validationSchema
  },
  ref
) => {
  const [open, setOpen] = useState(false)
  const schema = validationSchema || Yup.object().shape({})
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) })

  const development = import.meta.env.MODE === 'development'

  const openDialog = useCallback(() => {
    setOpen(true)
  }, [])

  const closeDialog = useCallback(() => {
    setOpen(false)
    methods.reset()
  }, [methods])

  useImperativeHandle(
    ref,
    () => ({
      open: openDialog,
      close: closeDialog,
      toggle: () => setOpen(value => !value)
    }),
    [closeDialog, openDialog]
  )

  return (
    <Dialog
      open={open}
      onClose={closeDialog}
      maxWidth='xl'
      scroll='paper'
      aria-labelledby='scroll-dialog-title'
      aria-describedby='scroll-dialog-description'
      PaperProps={{
        sx
      }}
    >
      {!unSubmited && onSubmit ? (
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
              <Button onClick={closeDialog} color='info' disabled={loading}>
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
      ) : (
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
            <Button onClick={closeDialog}>Fechar</Button>
          </DialogActions>
        </FormProvider>
      )}
      {development && <DevTool control={methods.control} />}
    </Dialog>
  )
}

export default forwardRef(DialogInperativeGuide)
