'use client'
import { styled } from '@/styles/stitchesTheme'

export const Label = styled('label', {
  fontSize: 16,
  color: '$primary800',
  width: '100%',
  textAlign: 'right',

  '@sm': {
    width: '100%',
    textAlign: 'left',
  },
  '@lg': {
    padding: '$2 0',
    width: '100%',
    textAlign: 'left',
  },
})
