import type { ComponentMeta } from '@storybook/react'

import MembersPage from './MembersPage'

export const generated = () => {
  return <MembersPage />
}

export default {
  title: 'Pages/MembersPage',
  component: MembersPage,
} as ComponentMeta<typeof MembersPage>
