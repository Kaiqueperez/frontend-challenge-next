import { Toast } from '@/components'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

describe('Toast component', () => {
  it('should render component', () => {
    const { getByText } = render(<Toast needShow toastText="Toast text" />)

    expect(getByText('Toast text')).toBeInTheDocument()
  })
})
