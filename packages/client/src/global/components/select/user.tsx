import { users } from 'service'
import { MenuItem, TextField, Box } from "@mui/material";
import { FormField } from '../form';
import { useUsers } from 'global/store/user'

interface IProps {
  hookForm?: boolean
  update?: boolean
}

export function SelectUser({ hookForm, update }: IProps) {
  const hook = hookForm || false
  const up = update || false

  const { data } = users.useFetching() 
  const { userId } = useUsers()
  
  return (
    <>
    {!hook && (
      <Box width='16rem'>
        <TextField name="userId" label="User" disabled={up? true: false} fullWidth size='medium' variant='filled' select>
          {data?.map(({ id, name }) => (
            <MenuItem value={id} onClick={() => {
              useUsers.setState({ userId: id })
            }}>{name}</MenuItem>
          ))}
        </TextField>
      </Box>
    )}
    {hook && (
      <FormField name="userId" label="User" disabled={up? true: false} fullWidth size='medium' variant='filled' select>
      {data?.map(({ id, name }) => (
        <MenuItem value={id} onClick={() => {
          useUsers.setState({ userId: id })
        }}>{name}</MenuItem>
      ))}
    </FormField>
    )}
    </>
  )
}