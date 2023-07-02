import type { ComponentMeta } from '@storybook/react'

import Store3Page from './Store3Page'

export const generated = () => {
  return <Store3Page />
}

export default {
  title: 'Pages/Store3Page',
  component: Store3Page,
} as ComponentMeta<typeof Store3Page>
