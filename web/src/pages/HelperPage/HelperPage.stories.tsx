import type { ComponentMeta } from '@storybook/react'

import HelperPage from './HelperPage'

export const generated = () => {
  return <HelperPage />
}

export default {
  title: 'Pages/HelperPage',
  component: HelperPage,
} as ComponentMeta<typeof HelperPage>
