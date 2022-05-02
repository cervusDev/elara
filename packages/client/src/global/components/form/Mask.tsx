import { FC } from 'react'
import { Controller, UseControllerProps, useFormContext } from 'react-hook-form'
import Mask, { Props as MaskProps } from 'react-input-mask'

import { InputLabelProps, TextField, TextFieldProps } from '@mui/material'

type FormFieldMaskProps = Omit<UseControllerProps, 'control'> &
  Omit<MaskProps, 'size'> &
  TextFieldProps & {
    name: string
    size?: 'small' | 'medium'
  }

export const FormFieldMask: FC<FormFieldMaskProps> = ({
  InputLabelProps: inputLabelProps,
  alwaysShowMask,
  beforeMaskedStateChange,
  disabled,
  mask,
  maskPlaceholder,
  name,
  onBlur,
  onChange,
  rules,
  size,
  variant = 'filled',
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
      render={({ field: { onChange, value, ...field }, fieldState: { error } }) => (
        <Mask
          {...field}
          name={name}
          mask={mask}
          maskPlaceholder={maskPlaceholder}
          alwaysShowMask={alwaysShowMask}
          beforeMaskedStateChange={beforeMaskedStateChange}
          value={value}
          onChange={e => {
            e.persist()
            onChange(e.target.value)
            handleChange(e)
          }}
          disabled={disabled}
        >
          <TextField
            {...rest}
            fullWidth
            error={!!error}
            variant={variant}
            helperText={error ? error.message : null}
            disabled={disabled}
            size={size}
            InputLabelProps={handleInputLabelProps(value)}
          />
        </Mask>
      )}
    />
  )
}
