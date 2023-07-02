import { render } from '@redwoodjs/testing/web'

import Store3Page from './Store3Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Store3Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Store3Page />)
    }).not.toThrow()
  })
})
