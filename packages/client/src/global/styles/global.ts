import { createStyles, makeStyles } from '@mui/styles'

export const useGlobalStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%'
      },
      body: {
        backgroundColor: '#f4f6f8',
        height: '100%',
        width: '100%',
        overflowX: 'hidden',
        fontFamily: 'Montserrat'
      },
      a: {
        textDecoration: 'none'
      },
      '#root': {
        height: '100%',
        width: '100%'
      }
    }
  })
)

const GlobalStyles = () => {
  useGlobalStyles()
  return null
}

export default GlobalStyles
