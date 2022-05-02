import { FC } from 'react'
import { Controller, UseControllerProps, useFormContext } from 'react-hook-form'

import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material'

type FormFieldCheckboxProps = Omit<UseControllerProps, 'control'> &
  CheckboxProps & {
    label: string
  }

type onChange = (...event: any[]) => void

export const FormFieldCheckbox: FC<FormFieldCheckboxProps> = ({
  name,
  rules,
  label,
  defaultChecked = false,
  onChange: onChangeMiddleware,
  ...rest
}) => {
  const { control } = useFormContext()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, value: boolean, onChange: onChange) => {
    if (onChangeMiddleware) {
      onChangeMiddleware(
        {
          ...event,
          target: {
            ...event.target,
            value: event.target.value
          }
        },
        value
      )
    }

    onChange(event, value)
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultChecked}
      render={({ field: { value, onChange, ...field } }) => (
        <FormControlLabel
          control={
            <Checkbox
              {...rest}
              {...field}
              checked={value === 'S' ? true : value === 'N' ? false : value}
              defaultChecked={defaultChecked}
              onChange={event => {
                handleChange(event, value, onChange)
              }}
            />
          }
          label={label}
        />
      )}
    />
  )
}
