import type { ComponentMeta } from '@storybook/react'

import Gpt4Page from './Gpt4Page'

export const generated = () => {
  return <Gpt4Page />
}

export default {
  title: 'Pages/Gpt4Page',
  component: Gpt4Page,
} as ComponentMeta<typeof Gpt4Page>
