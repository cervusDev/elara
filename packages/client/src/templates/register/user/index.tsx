import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Fragment } from 'react'
import { columns } from './constants/columns'
import { users } from 'service'

export function Datagrid() {
  const { data } = users.useFetching()

  return (
    <Fragment>
      <DataGrid
        rows={data || []}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
      />
    </Fragment>
  )
}