import { Controller, UseControllerProps, useFormContext } from 'react-hook-form'

import { InputLabelProps, TextField, TextFieldProps } from '@mui/material'

type FormsProps = Omit<UseControllerProps, 'control'> &
  Omit<TextFieldProps, 'name' | 'value' | 'ref'> & {
    name: string
  }

export const FormField: React.FC<FormsProps> = ({
  name,
  onChange,
  onBlur,
  rules,
  variant = 'filled',
  defaultValue,
  InputLabelProps: inputLabelProps,
  ...rest
}) => {
  const { control } = useFormContext()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange({
        ...event,
        target: {
          ...event.target,
          value: event.target.value
        }
      })
    }
  }

  const handleInputLabelProps = (value: string | undefined) => {
    const inputLabelPropsValue: InputLabelProps = {}
    if (inputLabelProps) {
      if (value && value.length > 0) {
        inputLabelPropsValue.shrink = true

        return inputLabelPropsValue
      }

      return inputLabelProps
    }

    if (value && value.length > 0) {
      inputLabelPropsValue.shrink = true
    }

    return inputLabelPropsValue
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, ...field }, fieldState: { error } }) => (
        <TextField
          {...field}
          {...rest}
          fullWidth
          error={!!error}
          variant={variant}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            onChange(event)
            handleChange(event)
          }}
          helperText={error ? error.message : null}
          defaultValue={defaultValue}
          InputLabelProps={handleInputLabelProps(field.value)}
        />
      )}
    />
  )
}
