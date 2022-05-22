import { GridColDef } from "@mui/x-data-grid";
import { Excluir } from '../atoms/modals/Excluir'
export const columns: GridColDef[] = [
  {
    width: 130,
    field: 'id',
    sortable: false,
    editable: false,
    headerName: 'ID',
    filterable: false,
  },
  {
    width: 280,
    field: 'name',
    sortable: false,
    editable: false,
    headerName: 'Name',
    filterable: false,
  },
  {
    width: 280,
    field: 'email',
    sortable: false,
    editable: false,
    headerName: 'Email',
    filterable: false,
  },
  {
    width: 445,
    field: ' ',
    sortable: false,
    editable: false,
    headerName: ' ',
    filterable: false,
    align: 'right',
    renderCell: Excluir
  },
]