'use client'
import { styled } from '@/styles/stitchesTheme'

export const MainContainer = styled('div', {
  display: 'flex',
  padding: '$4',
  gap: '$4',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',

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
