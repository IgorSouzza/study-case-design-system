import { ComponentProps } from 'react'

import { styled } from './styles'

export const Button = styled('button', {
  border: 0,
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  color: '$white',
  padding: '$4',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
