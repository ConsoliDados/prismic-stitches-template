'use client'
import { ComponentProps, ElementType } from 'react'
import { styled } from '@/styles/stitchesTheme'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$sm',
  backgroundColor: '$white',
  border: '1px solid $gray2',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
