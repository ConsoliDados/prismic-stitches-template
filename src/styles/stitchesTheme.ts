import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from './tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontWeights,
    fontSizes,
    fonts,
    lineHeights,
    space,
    radii,
  },
  media: {
    sm: '(max-width: 640px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1024px)',
    xlg: '(min-width: 1024px)',
  },
})
