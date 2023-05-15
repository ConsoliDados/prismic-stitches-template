'use client'
import { ComponentProps, ElementType } from 'react'
import { styled } from '@/styles/stitchesTheme'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: 'inhiret',

  variants: {
    size: {
      sm: { fontSizes: 'clamp($lg, 20vw, $xl)' },
      md: { fontSize: 'clamp($xl, 20vw, $2xl)' },
      lg: { fontSize: 'clamp($2xl, 20vw, $3xl)' },
      xl: { fontSize: 'clamp($3xl, 20vw, $4xl)' },
      '2xl': { fontSize: 'clamp($4xl, 20vw, $5xl)' },
      '4xl': { fontSize: 'clamp($5xl, 20vw, $6xl)' },
      '5xl': { fontSize: 'clamp($6xl, 20vw, $7xl)' },
      '6xl': { fontSize: 'clamp($7xl, 20vw, $8xl)' },
      '7xl': { fontSize: 'clamp($8xl, 20vw, $9xl)' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading'
