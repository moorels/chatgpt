import { render } from '@redwoodjs/testing/web'

import SkelLayout from './SkelLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SkelLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SkelLayout />)
    }).not.toThrow()
  })
})
