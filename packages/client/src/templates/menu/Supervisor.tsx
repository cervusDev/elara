import { Cadastros } from 'templates/menu/atoms/button/Registers'
import { Grid } from '@mui/material'

export function MenuSupervisor() {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Cadastros />
      </Grid>
    </Grid>
  )
}
