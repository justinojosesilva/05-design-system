import { Portal, Root, TooltipProvider, Trigger } from "@radix-ui/react-tooltip";
import { TooltipArrow, TooltipContent } from "./styles";
import { ComponentProps } from "react";

export interface TooltipProps extends ComponentProps<typeof TooltipProvider> {
  as?: string
  description: string
}

export function Tooltip({ children, description }: TooltipProps) {
  return (
    <TooltipProvider>
      <Root>
        <Trigger asChild>
          {children}
        </Trigger>
        <Portal>
          <TooltipContent sideOffset={5}>
            {description}   
            <TooltipArrow />         
          </TooltipContent>
        </Portal>
      </Root>
    </TooltipProvider>
  )
}