import { GridColDef } from "@mui/x-data-grid";
import { ITaskUser } from "@types";
import { Delete } from 'templates/register/task/atoms/modals/delete'
import { StatusChip } from 'templates/register/task/atoms/status'
import { EditTaskModal } from "../atoms/modals/edit";

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 100,
    sortable: false,
    resizable: false,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 380,
    sortable: false,
    resizable: false,
  },
  {
    field: 'state',
    headerName: 'State',
    width: 180,
    sortable: false,
    resizable: false,
    renderCell: StatusChip
  },
  {
    field: 'name',
    headerName: 'User',
    width: 180,
    sortable: false,
    resizable: false,
    valueGetter: (params) => {
      const { User } = params.row as ITaskUser
      return User.name
    }
  }, 
  {
    field: '.',
    headerName: ' ',
    width: 195,
    sortable: false,
    align:'right',
    resizable: false,
    renderCell: EditTaskModal
  },
  {
    width: 100,
    field: ' ',
    align: 'right',
    headerName: ' ',
    sortable: false,
    resizable: false,
    renderCell: Delete

  }
]