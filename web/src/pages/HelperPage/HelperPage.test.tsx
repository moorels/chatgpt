import { render } from '@redwoodjs/testing/web'

import HelperPage from './HelperPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HelperPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HelperPage />)
    }).not.toThrow()
  })
})
