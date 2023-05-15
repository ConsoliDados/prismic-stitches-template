'use client'
import { styled } from '@/styles/stitchesTheme'

export const Stack = styled('div', {
  display: 'flex',
  padding: '$4',
  gap: '$4',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
  },
})
