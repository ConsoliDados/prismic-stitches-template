/* eslint-disable camelcase */
import { globalCss } from './stitchesTheme'
// import { Roboto } from 'next/font/google'

// const font = Roboto({ subsets: ['latin'], weight: '400' })
// console.log(font.style)

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    border: 'unset',
    fontFamily: '$default, $code',
    // fontFamily: `${font.style.fontFamily}, $code`,
    // '-ms-overflow-style': 'none',
    // MsOverflowStyle: 'none',
    scrollbarWidth: 'none',
  },

  'html, body': {
    height: '100%',
    // MsOverflowStyle: 'none',
    // overflowX: 'hidden',

    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '&::WebkitScrollbar': {
      display: 'none',
    },
  },

  body: {
    backgroundColor: '$gray1',
    color: '$gray11',
    // '-webkit-font-smoothing': 'antialiased',
    // WebkitFontSmoothing: 'antialiased',
    lineHeight: 1.5,
  },

  main: {
    position: 'relative',
  },

  a: {
    all: 'unset',
    color: 'inherit',
    cursor: 'pointer',
  },
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },
  'h1, h2, h3, h4, h5, h6': {
    textTransform: 'uppercase',
    // '@sm': {
    //   textAlign: 'center',
    // },
  },

  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%',
  },

  'input, button, textarea, select': {
    font: 'inherit',
  },

  '#root, #__next': {
    isolation: 'isolate',
  },
})
