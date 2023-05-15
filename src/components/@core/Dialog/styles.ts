'use client'
import { Overlay, Content, Title, Description } from '@radix-ui/react-dialog'
import { blackA, green } from '@radix-ui/colors'
import { styled, keyframes, theme } from '../../../styles/stitchesTheme'

const { colors } = theme

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const DialogOverlay = styled(Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const DialogContent = styled(Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '1200px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
  overflowX: 'auto',
})

export const DialogTitle = styled(Title, {
  color: '$primary700',
})

export const DialogDescription = styled(Description, {
  margin: '10px 0 20px',
  color: '$gray9',
  fontSize: 16,
  lineHeight: 1.5,
})

export const Flex = styled('div', { display: 'flex' })

export const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 16,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  cursor: 'pointer',

  variants: {
    variant: {
      brand: {
        backgroundColor: '$primary500',
        color: '$white',
        // boxShadow: `0 2px 10px ${colors.gray10}`,
        '&:hover': { backgroundColor: '$primary300' },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      green: {
        backgroundColor: green.green4,
        border: `2px solid`,
        borderColor: green.green4,
        color: green.green11,
        '&:hover': { backgroundColor: green.green5 },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
      },
      secondary: {
        backgroundColor: 'transparent',
        border: `2px solid ${colors.primary4}`,
        color: '$primary400',
        '&:hover': { border: `1 px solid ${colors.primary2}` },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
      },
    },
  },

  defaultVariants: {
    variant: 'brand',
  },
})

export const NavigationContainer = styled('div', {
  display: 'inline-flex',
  alignItems: 'self-end',
  justifyContent: 'center',
  gap: '$4',
  position: 'absolute',
  top: 10,
  right: 10,
})

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$primary700',
  // position: 'absolute',
  // top: 10,
  // right: 10,

  '&:hover': { backgroundColor: colors.primary3 },
  '&:focus': { boxShadow: `0 0 0 2px ${colors.primary7}` },
})
