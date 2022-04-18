import { Grid } from '@mui/material'

import { FormGuideProps } from '../../types'

interface IFormGuide {
  fields: FormGuideProps
}

export function FormGuide({ fields }: IFormGuide) {
  const columns = fields.map(value => (value.columns !== undefined ? value.columns : 12))
  return (
    <>
      <Grid container spacing={2} rowSpacing={4} columns={columns}>
        {fields.map(() => {})}
      </Grid>
    </>
  )
}
