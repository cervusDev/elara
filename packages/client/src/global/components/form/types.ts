import { BeforeMaskedStateChangeStates, InputState } from 'react-input-mask'

import { FilledInputProps, InputLabelProps, Theme } from '@mui/material'
import { SxProps } from '@mui/system'

export type Option = {
  id: number | string
  nome: string
}

export interface IFormFieldProps {
  xs?: number
  md?: number
  lg?: number
  min?: number
  max?: number
  label?: string
  error?: boolean
  nameRef: string
  disabled?: true
  select?: boolean
  columns?: number
  options?: Option[]
  required?: boolean
  sx?: SxProps<Theme>
  invisible?: boolean
  errorMessage?: string
  onBlur?(e: any): void
  onClick?(e: any): void
  onChange?(e: any): void
  value?: string | undefined
  defaultValue?: string | undefined
  alwaysShowMask?: boolean | undefined
  mask?: string | Array<string | RegExp>
  InputProps?: Partial<FilledInputProps>
  InputLabelProps?: Partial<InputLabelProps>
  maskPlaceholder?: string | null | undefined
  display?: 'none' | 'grid' | 'inline-grid' | 'flex' | 'inline-flex'
  beforeMaskedStateChange?(states: BeforeMaskedStateChangeStates): InputState
  type?: 'time' | 'date' | 'datetime-local' | 'text' | 'number' | 'password' | 'email' | 'tel' | 'select'
}

export interface IFormCheckBoxProps {
  xs?: number
  md?: number
  lg?: number
  min?: number
  max?: number
  type?: string
  label: string
  nameRef: string
  columns?: number
  onClick?(): void
  checked?: boolean
  disabled?: boolean
  sx?: SxProps<Theme>
  invisible?: boolean
  onBlur?(e: any): void
  defaultChecked?: boolean
  display?: 'none' | 'grid'
  value?: string | undefined
  onChange?(e: any, v?: any): void
  defaultValue?: string | undefined
}
