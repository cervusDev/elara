
import { Box } from '@mui/material'
import { ContentGuide } from 'global/guides/ContentGuide'
import { Datagrid } from 'templates/register/task'
import { AddTaskModal } from 'templates/register/task/atoms/modals/add'
import { SelectUser } from 'global/components/select/user'


export function Tasks() {
  return (
    <ContentGuide
      headerContent={
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <SelectUser/>
          <AddTaskModal/>
        </Box>
      }
    >
      <Datagrid />
    </ContentGuide>
  )
}
