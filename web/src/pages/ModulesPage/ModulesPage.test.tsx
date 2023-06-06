import { render } from '@redwoodjs/testing/web'

import ModulesPage from './ModulesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ModulesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ModulesPage />)
    }).not.toThrow()
  })
})
