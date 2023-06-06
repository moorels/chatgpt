import type { ComponentMeta } from '@storybook/react'

import HomepagePage from './HomepagePage'

export const generated = () => {
  return <HomepagePage />
}

export default {
  title: 'Pages/HomepagePage',
  component: HomepagePage,
} as ComponentMeta<typeof HomepagePage>
