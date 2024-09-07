import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@justin-ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {},
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    description: '26 de Outubro - Indisponivel',
    children: (
      <Button>
        Click me
      </Button>
    )
  }
}
