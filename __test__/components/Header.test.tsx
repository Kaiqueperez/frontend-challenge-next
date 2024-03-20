import { Header } from '@/components'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Header component', () => {
  it('should render component', () => {
    const { getByText } = render(<Header />)

    expect(getByText('Capputeeno')).toBeInTheDocument()
  })

  it('should check value of search input', () => {
    render(<Header />)

    const searchInput = screen.getByTestId('search-header-input')

    fireEvent.input(searchInput, {
      target: {
        value: 'Camiseta bolada demais',
      },
    })

    expect(searchInput).toHaveValue('Camiseta bolada demais')
  })
})
