'use client'
import { styled } from '@/styles/stitchesTheme'
import * as LabelRoot from '@radix-ui/react-label'

export const Label = styled(LabelRoot.Root, {
  fontSize: '$xl',
  fontWeight: 700,
  // lineHeight: '35px',
  color: '$primary800',
  width: '100%',
  maxWidth: 100,
})
