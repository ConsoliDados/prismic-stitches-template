'use client'
import { styled } from '@/styles/stitchesTheme'

export const Fieldset = styled('fieldset', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: 15,
  width: '100%',
  flexWrap: 'wrap',
  gap: '$2',

  '@sm': {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  '@lg': {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  variants: {
    direction: {
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
      },
    },
  },
})
