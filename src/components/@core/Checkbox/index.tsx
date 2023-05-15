'use client'
import React, { ComponentProps } from 'react'
import { Check } from '@phosphor-icons/react'
import { Container, Indicator } from './styles'

export type CheckboxProps = ComponentProps<typeof Container>

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <Container {...props}>
      <Indicator asChild>
        <Check fontWeight={'bold'} />
      </Indicator>
    </Container>
  )
}
