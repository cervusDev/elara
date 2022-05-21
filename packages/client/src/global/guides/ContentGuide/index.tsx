import { ReactNode } from 'react'

import { Box, Card, Container, Stack } from '@mui/material'

interface ContentGuideProps {
  headerContent: JSX.Element | string
  children: ReactNode
}

export function ContentGuide({ children, headerContent }: ContentGuideProps) {
  return (
    <Container
      maxWidth='xl'
      sx={{
        display: 'flex',
        height: 'calc(100vh - 4.4rem)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
        padding: '2rem'
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 'lg',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          padding: '2rem',
          bgcolor: '#fcfcfcfc'
        }}
      >
        <Stack spacing={2} width='100%'>
          <Box width='100%'>{headerContent}</Box>
          <Box width='100%' height='calc(100vh - 15rem)'>
            {children}
          </Box>
        </Stack>
      </Card>
    </Container>
  )
}