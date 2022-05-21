import { Fragment, MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router'

import { Button, Menu, MenuItem } from '@mui/material'

export function Cadastros() {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClickRegisters = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseCadastro = () => {
    setAnchorEl(null)
  }

  const handleRegisters = (event: any) => {
    const value = event.currentTarget.textContent
    handleCloseCadastro()

    switch (value) {
      case 'Users':
        navigate('/users')
        break
      case 'Tasks':
        navigate('/tasks')
        break
      default:
        break
    }
  }

  return (
    <Fragment>
      <Button color='inherit' onClick={handleClickRegisters}>
        Register
      </Button>
      <Menu open={open} anchorEl={anchorEl} onClose={handleCloseCadastro}>
        <MenuItem onClick={handleRegisters}>Users</MenuItem>
        <MenuItem onClick={handleRegisters}>Tasks</MenuItem>
      </Menu>
    </Fragment>
  )
}
