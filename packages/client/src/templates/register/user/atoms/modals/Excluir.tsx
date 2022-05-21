import { Delete } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { GridRenderCellParams } from '@mui/x-data-grid'
import DialogGuide from 'global/guides/dialogGuide'
import { UserDeleteService as useService } from '../../service/delete'

export type Props = GridRenderCellParams<any, any>

export function Excluir(params: Props) {
  const { handleClick, handleSubmit, isLoading, ref } = useService(params)

  return (
    <Box>
      <Button color='inherit' onClick={handleClick}>
        <Delete />
      </Button>
      <DialogGuide
        ref={ref}
        width='auto'
        height='auto'
        loading={isLoading}
        submitLabel='Excluir'
        onSubmit={handleSubmit}
        title='Excluir Usuário'
      >
        Deseja excluir este usuário?
      </DialogGuide>
    </Box>
  )
}
