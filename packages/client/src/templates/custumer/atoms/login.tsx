import { useLayoutEffect } from 'react'
import { Box, Button, Checkbox, FormControlLabel, Grid, Link, Stack } from '@mui/material'
import { useStyles } from 'global/styles/useStyles'
import { useAuth } from 'hooks'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CreateCustumerModal } from './modals'
import { useCustumers } from 'global/store/custumer'

import * as Yup from 'yup'
import { FormField } from 'global/components/form'

export const schema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('email obrigatório'),
  password: Yup.string().min(4, 'Minimo de 4 caracteres').required('Senha obrigatória')
})


export function Login() {
  const { handleLogin, handleLogout } = useAuth()
  const { auth } = useCustumers()

  const style = useStyles()

  const methods = useForm({
    // defaultValues,
    resolver: yupResolver(schema)
  })

  useLayoutEffect(() => {
    if (auth) {
      handleLogout()
    }
  }, [auth, handleLogout])

  return (
    <Box width='100%'>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleLogin as any)}>
          <Stack spacing={2}>
            <FormField name='email' label='E-mail' />
            <FormField name='password' label='Password' type='password' />
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
      </FormProvider>
      <Grid container>
        <Grid item xs>
          <Link href='#' variant='button' sx={{ color: '#265b83', cursor: 'pointer' }}>
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <CreateCustumerModal />
        </Grid>
      </Grid>
    </Box>
  )
}
