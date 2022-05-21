import { GridColDef } from "@mui/x-data-grid";
import { Excluir } from '../atoms/modals/Excluir'
export const columns: GridColDef[] = [
  {
    width: 100,
    field: 'id',
    sortable: false,
    editable: false,
    headerName: 'ID',
    filterable: false,
  },
  {
    width: 150,
    field: 'name',
    sortable: false,
    editable: false,
    headerName: 'Name',
    filterable: false,
  },
  {
    width: 180,
    field: 'email',
    sortable: false,
    editable: false,
    headerName: 'Email',
    filterable: false,
  },
  {
    width: 150,
    field: ' ',
    sortable: false,
    editable: false,
    headerName: ' ',
    filterable: false,
    renderCell: Excluir
  },
]