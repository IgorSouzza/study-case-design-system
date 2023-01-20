import { Box, BoxProps, Text } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Box content</Text>,
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
