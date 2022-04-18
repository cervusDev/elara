import { createTheme } from '@mui/system'

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#265b83'
    },
    secondary: {
      main: '#009cff',
      contrastText: '#ffffff'
    },
    error: {
      main: '#de0f3f'
    },
    warning: {
      main: '#f2bb00'
    },
    info: {
      main: '#009cff'
    },
    success: {
      main: '#00a987'
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    fontSize: 13
  }
})

export default theme
