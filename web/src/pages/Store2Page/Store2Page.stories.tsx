import type { ComponentMeta } from '@storybook/react'

import Store2Page from './Store2Page'

export const generated = () => {
  return <Store2Page />
}

export default {
  title: 'Pages/Store2Page',
  component: Store2Page,
} as ComponentMeta<typeof Store2Page>
