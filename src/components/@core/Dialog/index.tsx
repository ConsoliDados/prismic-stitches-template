'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { X, PencilSimple, Minus } from '@phosphor-icons/react'
import React, {
  ComponentProps,
  Dispatch,
  ReactNode,
  SetStateAction,
} from 'react'
import {
  Button,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  Flex,
  IconButton,
  NavigationContainer,
} from './styles'
import { Text } from '@/components/@core'

type CustomDialogProps = {
  children: ReactNode
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  clearForm: () => void
}

export const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  setOpen,
  children,
  clearForm,
}) => (
  <Dialog.Root
    open={open}
    onOpenChange={(open) => {
      setOpen(open)
      if (!open) {
        // window.alert("Esc was pressed")
        clearForm()
      }
    }}
  >
    <Dialog.Trigger asChild>
      <Button>
        <PencilSimple />
      </Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent onEscapeKeyDown={() => clearForm()}>
        <Flex
          css={{
            padding: '$8 $4',
            flexDirection: 'column',
            width: '100%',
            margin: '0 auto',
          }}
        >
          {/* Custom Title and Description, may be could be good place children here */}
        </Flex>
        {children}
        <Dialog.Close asChild>
          <NavigationContainer>
            <IconButton aria-label="Minimize">
              <Minus size={24} />
            </IconButton>
            <IconButton onClick={clearForm} aria-label="Close">
              <X size={24} />
            </IconButton>
          </NavigationContainer>
        </Dialog.Close>
      </DialogContent>
    </Dialog.Portal>
  </Dialog.Root>
)

type CustomDialogTitleProps = {
  children: ReactNode
}

export function CustomDialogTitle({ children }: CustomDialogTitleProps) {
  return (
    <DialogTitle asChild>
      <Text as="h3" size="2xl">
        {children}
      </Text>
    </DialogTitle>
  )
}

interface CustomDialogDescriptionProps
  extends ComponentProps<typeof DialogDescription> {
  children: ReactNode
}

export function CustomDilogDescription({
  children,
  ...props
}: CustomDialogDescriptionProps) {
  return <DialogDescription {...props}>{children}</DialogDescription>
}
