'use client'
import { styled, theme } from '@/styles/stitchesTheme'
const { colors } = theme

export const TextInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  minHeight: 35,
  maxHeight: 45,
  width: '100%',
  flex: 1,

  backgroundColor: '$gray1',
  padding: '$1 $3',

  boxSizing: 'border-box',
  border: '1px solid $primary6',
  borderRadius: '$sm',
  boxShadow: `0 0 0 1px ${colors.primary6}`,

  '&:has(input:focus)': {
    borderColor: '$primary',
  },
  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:focus': { boxShadow: `0 0 0 2px ${colors.primary8}` },

  svg: {
    height: '$6',
    width: '$6',
    color: '$primary800',
  },

  button: {
    all: 'unset',
    cursor: 'pointer',
    lineHeight: 0,
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  color: '$gray9',
  fontWeight: '$regular',
  fontSize: '$sm',
  whiteSpace: 'nowrap',
})

export const Input = styled('input', {
  flex: '1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$primary7',
  width: '100%',
  height: '100%',

  fontFamily: '$default',
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: 1,
  background: 'transparent',
  border: 0,

  '&:focus': {
    outline: 'none',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
  '::placeholder': {
    color: '$gray8',
  },
})

// export const Input = styled('input', {
//   fontFamily: '$default',
//   fontSize: '$sm',
//   fontWeight: '$regular',
//   color: '$gray10',
//   background: 'transparent',
//   border: 0,
//   width: '100%',

//   '&:focus': {
//     outline: 'none',
//   },

//   '&:disabled': {
//     cursor: 'not-allowed',
//   },
//   '::placeholder': {
//     color: '$gray8',
//   },
// })
