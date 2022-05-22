import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button } from '@mui/material'
import { GridRenderCellParams } from '@mui/x-data-grid'
import DialogGuide from 'global/guides/dialogGuide'
import { DeleteTaskService as useService } from '../../service/del'

export type Props = GridRenderCellParams<any, any>

export function Delete(params: Props) {
  const { handleClick, handleSubmit, ref } = useService(params)

  return (
    <Box>
      <Button color='inherit' onClick={handleClick}>
        <DeleteIcon />
      </Button>
      <DialogGuide
        ref={ref}
        width='auto'
        height='auto'
        loading={false}
        submitLabel='Excluir'
        onSubmit={handleSubmit}
        title='Excluir Usuário'
      >
        want to delete this task?
      </DialogGuide>
    </Box>
  )
}
