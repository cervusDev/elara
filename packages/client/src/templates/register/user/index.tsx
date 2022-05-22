import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Fragment, useEffect } from 'react'
import { columns } from './constants/columns'
import { users } from 'service'
import { useCustumers } from 'global/store/custumer'


export function Datagrid() {
  const { data } = users.useFetching()
  const { token, auth } = useCustumers()

  useEffect(() => {
    console.log("token", token, auth)
  }, [])

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