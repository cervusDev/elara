import DialogGuide from 'global/guides/dialogGuide'
import { CreateTaskInputs } from '../forms/create-task'
import { AddTaskService as useService } from '../../service/add'
import { Box, Button } from '@mui/material'
import { SelectUser } from 'global/components/select/user'

export function AddTaskModal() {
  const { handleClick, handleSubmit, ref, isLoading } = useService()

  return (
    <Box>
      <Button color='info' variant='contained' onClick={handleClick}>
        new task 
      </Button>
      <DialogGuide
        ref={ref}
        height='auto'
        width='52rem'
        title='Add Task'
        loading={isLoading}
        onSubmit={handleSubmit}
        // validationSchema={null}
      >
        <CreateTaskInputs />
      </DialogGuide>
    </Box>
  )
}