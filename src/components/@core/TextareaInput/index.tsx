'use client'
import {
  ComponentProps,
  ReactElement,
  useCallback,
  useRef,
  useState,
} from 'react'
import { Textarea, Prefix, TextareaContainer } from './styles'
import { theme } from '@/styles/stitchesTheme'
const { colors } = theme

export interface TextareaInputProps extends ComponentProps<typeof Textarea> {
  prefix?: string
}

export function TextareaInput({ prefix, ...props }: TextareaInputProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [hasFocus, setFocus] = useState(false)

  return (
    <TextareaContainer
      css={{ boxShadow: hasFocus ? `0 0 0 2px ${colors.primary8}` : 'none' }}
    >
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Textarea
        ref={inputRef}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...props}
      />
    </TextareaContainer>
  )
}
