import { useState } from 'react'

import { Menu, MenuItem } from '@mui/material'
import { useAuth } from 'hooks/useAuth'

export function useNavbar() {
  const { handleLogout } = useAuth()
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorParams, setAnchorParams] = useState(null)

  const isProfileMenuOpen = Boolean(anchorEl)
  const open = Boolean(anchorParams)

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseProfile = () => {
    setAnchorEl(null)
  }

  const handleClickParams = (event: any) => {
    setAnchorParams(event.currentTarget)
  }

  const handleCloseParams = () => {
    setAnchorParams(null)
  }

  const renderProfileMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isProfileMenuOpen}
      onClose={handleCloseProfile}
    >
      <MenuItem>settings</MenuItem>
      <MenuItem>profile</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  )

  return {
    anchorEl,
    anchorParams,
    handleClickParams,
    handleCloseParams,
    handleProfileMenuOpen,
    isProfileMenuOpen,
    open,
    renderProfileMenu
  }
}
