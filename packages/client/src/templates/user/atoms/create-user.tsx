import { useRef, useState } from 'react'

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Link,
  TextField
} from '@mui/material'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

export function CreateUserForm() {
  const [open, setOpen] = useState(false)

  const formRef = useRef<FormHandles>(null)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box>
      <Link variant='button' sx={{ cursor: 'pointer', color: '#265b83' }} onClick={handleClickOpen}>
        Create account
      </Link>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Get started</DialogTitle>
        <DialogContent
          sx={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <DialogContentText sx={{ marginBottom: 4 }}>find marguii from all over the world!</DialogContentText>
          <Form ref={formRef} onSubmit={() => {}}>
            <Grid sx={{ width: '100%' }} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <TextField name='name' label='Enter your first name' type='text' variant='filled' size='small' />
              </Grid>

              <Grid item xs={6}>
                <TextField name='email' label='Enter your email' type='text' variant='filled' size='small' />
              </Grid>

              <Grid item xs={6}>
                <TextField name='username' label='Enter your nickname' type='text' variant='filled' size='small' />
              </Grid>

              <Grid item xs={6}>
                <TextField name='password' label='Enter your password' type='password' variant='filled' size='small' />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name='confirme'
                  label='Confirm your password'
                  type='password'
                  variant='filled'
                  size='small'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField name='imagem' label='Picture Profile' type='text' variant='filled' size='small' />
              </Grid>
            </Grid>

            <DialogActions style={{ display: 'flex', justifyContent: 'center', margin: 2 }}>
              <Button sx={{ background: '#265b83', mt: 4 }} variant='contained' type='submit'>
                Submit
              </Button>
            </DialogActions>
          </Form>
        </DialogContent>
      </Dialog>
    </Box>
  )
}
