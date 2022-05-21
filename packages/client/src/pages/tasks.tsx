
import { Box } from '@mui/material'
import { ContentGuide } from 'global/guides/ContentGuide'
import { Datagrid } from 'templates/register/task'
export function Tasks() {
  return (
    <ContentGuide
      headerContent={
        <Box display='flex' justifyContent='space-between' alignItems='center'>
        </Box>
      }
    >
      <Datagrid />
    </ContentGuide>
  )
}
