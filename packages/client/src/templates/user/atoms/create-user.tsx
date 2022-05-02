import { useRef } from 'react'

import { Box, Link } from '@mui/material'
import DialogGuide, { DialogInperativeHandle } from 'global/guides/dialogGuide'

export function CreateUserForm() {
  const ref = useRef<DialogInperativeHandle>(null)
  return (
    <Box>
      <Link variant='button' sx={{ cursor: 'pointer', color: '#265b83' }} onClick={() => {}}>
        Create account
      </Link>

      <DialogGuide title='Create account' ref={ref} onSubmit={() => {}}>
        {/* formulario */}
      </DialogGuide>
    </Box>
  )
}
// <Dialog open={open} onClose={handleClose}>
//   <DialogTitle>Get started</DialogTitle>
//   <DialogContent
//     sx={{
//       padding: '2rem',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center'
//     }}
//   >
//     <DialogContentText sx={{ marginBottom: 4 }}>find marguii from all over the world!</DialogContentText>
//     <Form ref={formRef} onSubmit={() => {}}>
//       <Grid sx={{ width: '100%' }} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//         <Grid item xs={6}>
//           <TextField name='name' label='Enter your first name' type='text' variant='filled' size='small' />
//         </Grid>

//         <Grid item xs={6}>
//           <TextField name='email' label='Enter your email' type='text' variant='filled' size='small' />
//         </Grid>

//         <Grid item xs={6}>
//           <TextField name='username' label='Enter your nickname' type='text' variant='filled' size='small' />
//         </Grid>

//         <Grid item xs={6}>
//           <TextField name='password' label='Enter your password' type='password' variant='filled' size='small' />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             name='confirme'
//             label='Confirm your password'
//             type='password'
//             variant='filled'
//             size='small'
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField name='imagem' label='Picture Profile' type='text' variant='filled' size='small' />
//         </Grid>
//       </Grid>

//       <DialogActions style={{ display: 'flex', justifyContent: 'center', margin: 2 }}>
//         <Button sx={{ background: '#265b83', mt: 4 }} variant='contained' type='submit'>
//           Submit
//         </Button>
//       </DialogActions>
//     </Form>
//   </DialogContent>
// </Dialog>
