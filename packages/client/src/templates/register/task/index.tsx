import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Fragment } from 'react'

export function Datagrid() {

  return (
    <Fragment>
      <DataGrid
        rows={[]}
        columns={[]}
        components={{ Toolbar: GridToolbar }}
      />
    </Fragment>
  )
}