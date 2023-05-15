'use client'
import { styled, keyframes } from '@/styles/stitchesTheme'
import * as Checkbox from '@radix-ui/react-checkbox'
import { green } from '@radix-ui/colors'

export const Container = styled(Checkbox.Root, {
  all: 'unset',
  height: '$6',
  width: '$6',
  backgroundColor: '$gray2',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pinter',
  overflow: 'hidden',
  borderSize: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray2',

  '&[data-state="checked"]': {
    backgroundColor: green.green4,
  },

  '&:focus': {
    border: '2px solid $primary500',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0%)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0%)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const Indicator = styled(Checkbox.Indicator, {
  color: '$gray10',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
