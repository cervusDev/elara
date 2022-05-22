import { GridRenderCellParams } from "@mui/x-data-grid"
import { Box, Button } from '@mui/material'
import DialogGuide from 'global/guides/dialogGuide'
import EditIcon from '@mui/icons-material/Edit';
import { UpdateTaskInputs } from '../forms/update-task'
import { EditTaskService as useService } from '../../service/edit'

export type Props = GridRenderCellParams<any, any>

export function EditTaskModal(params: Props) {
  const { handleClick, handleSubmit, isLoading, ref } = useService(params)

  return (
    <Box>
      <Button color="inherit" onClick={handleClick}>
        <EditIcon/>
      </Button>
      <DialogGuide
        ref={ref}
        loading={isLoading}
        title='Edit Task'
        height="auto"
        submitLabel='Done'
        onSubmit={handleSubmit}
        defaultValues={params.row}
      >
        <UpdateTaskInputs/>
      </DialogGuide>
    </Box>
  )
}
