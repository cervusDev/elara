import { MenuSupervisor } from 'templates/menu/Supervisor'

import AccountCircle from '@mui/icons-material/AccountCircle'
import { AppBar, Box, IconButton, Toolbar } from '@mui/material'

import { useNavbar } from './hook/useNavbar'

export function AppNavbar() {
  const { renderProfileMenu, handleProfileMenuOpen } = useNavbar()

  return (
    <Box sx={{ flexGrow: 1, width: '100vw' }}>
      <AppBar position='static' color='primary' sx={{ paddingX: '4rem' }} style={{ background: '#265b83' }}>
        <Toolbar>
            <MenuSupervisor />
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size='large'
            edge='end'
            aria-label='account of current user'
            aria-haspopup='true'
            onClick={handleProfileMenuOpen}
            color='inherit'
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderProfileMenu}
    </Box>
  )
}
