'use client'
import React, { ComponentProps, ReactElement } from 'react'
import { Fieldset } from '../Fieldset'
import { Label } from './styles'
import { TextareaInput } from '../TextareaInput'

interface FormTextareaProps extends ComponentProps<typeof TextareaInput> {
  label: string
  id: string
  prefix?: string
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  id,
  prefix,
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
      <TextareaInput prefix={prefix} id={id} css={{ flex: 2 }} {...props} />
    </Fieldset>
  )
}
