import type { ComponentMeta } from '@storybook/react'

import ModulesPage from './ModulesPage'

export const generated = () => {
  return <ModulesPage />
}

export default {
  title: 'Pages/ModulesPage',
  component: ModulesPage,
} as ComponentMeta<typeof ModulesPage>
