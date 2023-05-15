'use client'
import { styled } from '@/styles/stitchesTheme'

export const Container = styled('div', {
  display: 'flex',
  padding: '$12 $6',
  gap: '$4',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 'max-content',
  margin: '0 auto',

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
