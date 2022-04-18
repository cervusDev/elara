import logo from 'assets/elara.png'

// import { Login } from 'templates/Auth'
import { Container, Paper, Stack } from '@mui/material'

export function Home() {
  return (
    <Container
      maxWidth='xs'
      sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      <Stack spacing={0} justifyContent='center' alignItems='center'>
        <img style={{ width: 250 }} src={logo} alt='logo prosis' />
        <Paper
          elevation={3}
          sx={{
            mb: 4,
            width: '25rem',
            height: '27rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '0.8rem',
            background: 'white',
            paddingX: '2.5rem'
          }}
        >
          <Stack width='100%' spacing={4} justifyContent='center' alignItems='center'>
            {/* <img src={logoMobile} alt='ponto web' /> */}
            {/* <Login /> */}
          </Stack>
        </Paper>
      </Stack>
    </Container>
  )
}
