import { Grid, MenuItem } from '@mui/material'
import { FormField } from 'global/components/form'
import { SelectUser } from 'global/components/select/user'

export function CreateTaskInputs() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormField name='description' multiline rows={2} label='Enter with your description task' />
      </Grid>

      <Grid item xs={6}>
        <FormField name='state' label='State of your Task' select>
          <MenuItem value='PENDING'>Pending</MenuItem>
          <MenuItem value='PROGRESS'>Progress</MenuItem>
          <MenuItem value='DONE'>Done</MenuItem>
        </FormField>
      </Grid>

      <Grid item xs={6}>
        <SelectUser hookForm/>
      </Grid>
    </Grid>
  )
}
