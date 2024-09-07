import { styled, keyframes } from "../../styles";
import * as Toast from "@radix-ui/react-toast"

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  }
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + $6))',
  },
  to: {
    transform: 'translateX(0)',
  }
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(calc(100% + $6))',
  }
})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray600',
  borderRadius: '$sm',
  border: '1px',
  padding: '$4 $5',
  gap: '$1',
  display: 'grid',
  gridTemplateAreas: `'title action' 'description action'`,
  gridTemplateColumns: 'auto max-content',
  columnGap: '15px',
  alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="move"]': {
    transform: `translateX(var(--radix-toast-swipe-move-x))`,
  },

  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  }
})



export const ToastTitle = styled(Toast.Title, {
  fontFamily: 'Roboto',
  gridArea: 'title',
  marginBottom: '5px',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
  color: '$white',  
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  margin: 0,
  color: '$gray200',
  fontFamily: 'Roboto',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
})

export const ToastAction = styled(Toast.Action, {
  gridArea: 'action',
})

export const CloseButton = styled('button', {
  all: 'unset',
  background: 'transparent',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
  color: '$white', 
  cursor: 'pointer',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: "fixed",
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  gap: '$2',
  width: '390px',
  maxWidth:'100vw',
  margin: 0,
  zIndex: 21334554564,
  outline: 'none',
})