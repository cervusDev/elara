import { Grid } from '@mui/material'
import { FormField } from 'global/components/form'

export function CreateUserInputs() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormField name='name' label='Enter your first name' type='text' variant='filled' size='small' />
      </Grid>

      <Grid item xs={6}>
        <FormField name='email' label='Enter your email' type='text' variant='filled' size='small' />
      </Grid>

      <Grid item xs={6}>
        <FormField name='username' label='Enter your nickname' type='text' variant='filled' size='small' />
      </Grid>

      <Grid item xs={6}>
        <FormField name='password' label='Enter your password' type='password' variant='filled' size='small' />
      </Grid>
      <Grid item xs={6}>
        <FormField name='confirme' label='Confirm your password' type='password' variant='filled' size='small' />
      </Grid>
      <Grid item xs={6}>
        <FormField name='imagem' label='Picture Profile' type='text' variant='filled' size='small' />
      </Grid>
    </Grid>
  )
}
