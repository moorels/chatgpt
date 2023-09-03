import type { ComponentMeta } from '@storybook/react'

import Test1Page from './Test1Page'

export const generated = () => {
  return <Test1Page />
}

export default {
  title: 'Pages/Test1Page',
  component: Test1Page,
} as ComponentMeta<typeof Test1Page>
