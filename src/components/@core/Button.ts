'use client'
import { ComponentProps, ElementType } from 'react'
import { styled } from '@/styles/stitchesTheme'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  fontSize: '$md',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  minHeight: 42,
  // height: '$10',
  border: 0,
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        // '&:disabled': {
        //   backgroundColor: '$gray7',
        //   color: '$gray5',
        //   cursor: 'not-allowed',
        // },
      },
      secondary: {
        backgroundColor: 'transparent',
        border: '2px solid',
        // '&:disabled': {
        //   borderColor: '$gray7',
        //   color: '$gray5',
        //   cursor: 'not-allowed',
        // },
      },
      tertiary: {
        backgroundColor: 'transparent',
        color: '$gray8',

        '&:not(:disabled):hover': {
          backgroundColor: 'transparent',
          color: '$white',
        },
        '&:disabled': {
          backgroundColor: 'transparent',
          color: '$gray5',
          cursor: 'not-allowed',
        },
      },
    },
    size: {
      md: {
        padding: '0 $4',
        height: 46,
      },
    },
    color: {
      primary: {
        backgroundColor: '$primary',
        color: '$white',
        '&:not(:disabled):hover': {
          backgroundColor: '$primary7',
        },
        '&:disabled': {
          backgroundColor: '$gray7',
          color: '$gray3',
          cursor: 'not-allowed',
        },
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$white',
        '&:not(:disabled):hover': {
          backgroundColor: '$primary10',
        },
        '&:disabled': {
          backgroundColor: '$gray7',
          color: '$gray3',
          cursor: 'not-allowed',
        },
      },
    },
    textColor: {
      primary: {
        color: '$primary',
        '&:not(:disabled):hover': {
          color: '$primary700',
        },
        '&:disabled': {
          color: '$gray3',
          cursor: 'not-allowed',
        },
      },
      secondary: {
        color: '$secondary',
        '&:not(:disabled):hover': {
          color: '$secondary700',
        },
        '&:disabled': {
          color: '$gray3',
          cursor: 'not-allowed',
        },
      },
      white: {
        color: '$white',
        '&:not(:disabled):hover': {
          color: '$gray5',
        },
        '&:disabled': {
          color: '$gray3',
          cursor: 'not-allowed',
        },
      },
    },
    borderColor: {
      primary: {
        // backgroundColor: 'transparent',
        borderColor: '$primary',

        '&:not(:disabled):hover': {
          // backgroundColor: 'transparent',
          borderColor: '$primary700',
        },
        '&:disabled': {
          borderColor: '$gray7',
          color: '$gray3',
          cursor: 'not-allowed',
        },
      },
      secondary: {
        // backgroundColor: 'transparent',
        borderColor: '$secondary',

        '&:not(:disabled):hover': {
          // backgroundColor: 'transparent',
          borderColor: '$secondary700',
        },
        '&:disabled': {
          borderColor: '$gray7',
          color: '$gray3',
          cursor: 'not-allowed',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
    variant: 'primary',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
