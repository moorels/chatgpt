import { render } from '@redwoodjs/testing/web'

import Store2Page from './Store2Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Store2Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Store2Page />)
    }).not.toThrow()
  })
})
