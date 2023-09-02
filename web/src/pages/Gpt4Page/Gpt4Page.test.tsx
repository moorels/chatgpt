import { render } from '@redwoodjs/testing/web'

import Gpt4Page from './Gpt4Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Gpt4Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Gpt4Page />)
    }).not.toThrow()
  })
})
