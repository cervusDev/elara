import { FC } from 'react'
import { Controller, UseControllerProps, useFormContext } from 'react-hook-form'

import { Autocomplete, TextField, TextFieldProps } from '@mui/material'

type FormFieldCheckboxProps = Omit<UseControllerProps, 'control'> &
  Omit<TextFieldProps, 'name' | 'value' | 'ref'> & {
    options: ReadonlyArray<any>
    getOptionLabel?: (option: any) => string
  }

export const FormFieldAutocomplete: FC<FormFieldCheckboxProps> = ({
  name,
  rules,
  options,
  getOptionLabel,
  variant = 'filled',
  disabled,
  ...rest
}) => {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Autocomplete
          value={value}
          onChange={(_, value) => onChange(value)}
          options={options}
          getOptionLabel={getOptionLabel}
          readOnly={disabled}
          renderInput={autoCompleteProps => (
            <TextField
              {...rest}
              {...autoCompleteProps}
              disabled={disabled}
              variant={variant}
              fullWidth
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
      )}
    />
  )
}
