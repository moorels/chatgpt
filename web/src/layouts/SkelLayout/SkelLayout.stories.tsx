import type { ComponentMeta, ComponentStory } from '@storybook/react'

import SkelLayout from './SkelLayout'

export const generated: ComponentStory<typeof SkelLayout> = (args) => {
  return <SkelLayout {...args} />
}

export default {
  title: 'Layouts/SkelLayout',
  component: SkelLayout,
} as ComponentMeta<typeof SkelLayout>
