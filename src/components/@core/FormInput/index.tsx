'use client'
import React, { ComponentProps, ReactElement } from 'react'
import { Fieldset } from '../Fieldset'
import { Label } from './styles'
import { TextInput } from '../TextInput'

interface FormInputProps extends ComponentProps<typeof TextInput> {
  label: string
  id: string
  prefix?: string
  LeftIcon?: ReactElement
  RightIcon?: ReactElement | ReactElement[]
  isPassword?: boolean
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  id,
  prefix,
  LeftIcon,
  RightIcon,
  isPassword,
  ...props
}) => {
  return (
    <Fieldset direction={'column'}>
      <Label
        htmlFor={id}
        css={{ textAlign: 'left', display: 'inline-block', maxWidth: '100%' }}
      >
        {label}
      </Label>
      <TextInput
        isPassword={isPassword}
        prefix={prefix}
        LeftIcon={LeftIcon}
        RightIcon={RightIcon}
        id={id}
        css={{ flex: 2 }}
        {...props}
      />
    </Fieldset>
  )
}
