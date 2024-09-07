import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@justin-ignite-ui/react'
import { useState } from 'react'
import { useArgs } from 'storybook/internal/preview-api'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    open: false,
  },

  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs()

    function onChange(): void {
      updateArgs({ open: !open })
    }

    return (
      <Toast {...args} open={open} setOpen={onChange}>
        <Button onClick={onChange}>
          Add to calendar
        </Button>
      </Toast>
    )
  }


}
