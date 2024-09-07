import { styled } from "../../styles";
import * as Tooltip from "@radix-ui/react-tooltip";

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: '$sm',
  background: '$gray900',
  color: '$gray100',
  padding: '$3 $4',

  fontFamily: 'Inter',
  fontWeight: '$medium',
  fontSize: '$sm',
  lineHeight: '$short',

  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  boxShadow: '$1 $4 $6 0 #00000040',
})
export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})