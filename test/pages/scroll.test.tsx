import React from 'react'
import { render } from '../testUtils'
import ScrollPage from '../../src/pages/scroll'

describe('Scroll page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<ScrollPage />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', () => {
    const { getByText } = render(<ScrollPage />, {})

    const sectionText = getByText('Section1').textContent
    expect(sectionText).toBe('Section1')
  })
})
