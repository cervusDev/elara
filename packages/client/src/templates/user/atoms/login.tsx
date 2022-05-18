import { useRef } from 'react'

import { Box, Button, Checkbox, FormControlLabel, Grid, Link, Stack, TextField } from '@mui/material'
import { useStyles } from 'global/styles/useStyles'

import { CreateUserModal } from '../atoms/modals'

export function Login() {
  const formRef = useRef(null)

  const style = useStyles()

  return (
    <Box width='100%'>
      <form ref={formRef} onSubmit={() => {}}>
        <Stack spacing={2}>
          <TextField variant='filled' fullWidth name='email' label='E-mail' />
          <TextField variant='filled' fullWidth name='password' label='Password' type='password' />
          <FormControlLabel
            className={style.title}
            control={
              <Checkbox
                color='primary'
                sx={{
                  color: '#265b83',
                  '&.Mui-checked': {
                    color: '#265b83'
                  }
                }}
              />
            }
            label='Remember-me'
          />
        </Stack>
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2, background: '#265b83' }}>
          Sign-in
        </Button>
      </form>
      <Grid container>
        <Grid item xs>
          <Link href='#' variant='button' sx={{ color: '#265b83', cursor: 'pointer' }}>
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <CreateUserModal />
        </Grid>
      </Grid>
    </Box>
  )
}
