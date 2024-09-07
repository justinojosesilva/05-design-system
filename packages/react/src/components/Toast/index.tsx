import { Provider, ToastAction } from '@radix-ui/react-toast'
import { ComponentProps, useEffect, useRef, useState } from 'react'
import { CloseButton, ToastDescription, ToastRoot, ToastTitle, ToastViewport } from './styles'
import { X } from 'phosphor-react'
import { Button } from '../Button'

export interface ToastProps extends ComponentProps<typeof Provider>{
  as?: string
  direction?: "down" | "left" | "right" | "up"
  title: string
  open: boolean
  setOpen: () => {}
}

function oneWeekAway(date: Date) {
  const now = new Date()
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek)
}

function prettyDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', { 
    dateStyle: 'full',
    timeStyle: 'short'
  }).format(date)
}

export function Toast({ children, title, direction = "right", open = false, setOpen }: ToastProps) {
  const eventDateRef = useRef(new Date())
  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <Provider swipeDirection={direction}>
      {children}
      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>
          <time dateTime={eventDateRef.current.toISOString()}>
            {prettyDate(eventDateRef.current)}
          </time>
        </ToastDescription>
        <ToastAction asChild altText='Fechar'>
          <CloseButton>
            <X />
          </CloseButton>          
        </ToastAction>
      </ToastRoot>
      <ToastViewport />
    </Provider>
  )
}