'use client'
import {
  ComponentProps,
  ReactElement,
  useCallback,
  useRef,
  useState,
} from 'react'
import { Input, Prefix, TextInputContainer } from './styles'
import { theme } from '@/styles/stitchesTheme'
const { colors } = theme

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  LeftIcon?: ReactElement
  RightIcon?: ReactElement | ReactElement[]
  isPassword?: boolean
}

export function TextInput({
  prefix,
  LeftIcon,
  RightIcon,
  isPassword = false,
  ...props
}: TextInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [showPassword, setShowPassword] = useState(!isPassword)
  const [hasFocus, setFocus] = useState(false)

  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev)
  }, [])

  return (
    <TextInputContainer
      css={{ boxShadow: hasFocus ? `0 0 0 2px ${colors.primary8}` : 'none' }}
    >
      {!!prefix && <Prefix>{prefix}</Prefix>}
      {!!LeftIcon && LeftIcon}
      <Input
        ref={inputRef}
        type={showPassword ? 'text' : 'password'}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...props}
      />
      {!!RightIcon && Array.isArray(RightIcon) && isPassword ? (
        <button onClick={togglePassword} type="button">
          {RightIcon[showPassword ? 0 : 1]}
        </button>
      ) : (
        RightIcon
      )}
    </TextInputContainer>
  )
}
