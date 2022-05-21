
import { Box } from '@mui/material'
import { ContentGuide } from 'global/guides/ContentGuide'
import { Datagrid } from 'templates/register/user'
import { AddUser } from 'templates/register/user/atoms/modals/Adicionar'

export function Users() {
  return (
    <ContentGuide
      headerContent={
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <AddUser />
        </Box>
      }
    >
      <Datagrid />
    </ContentGuide>
  )
}
