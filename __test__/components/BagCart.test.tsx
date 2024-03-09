import { BagCart } from '@/components'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('BagCart component', () => {
  it('should render component', () => {
    render(<BagCart itensCart={15} url={''} />)

    const button = screen.getByTestId('button-cart')

    expect(button).toBeInTheDocument()
  })

  it('should have a text with number of itens in the cart', () => {
    render(<BagCart itensCart={15} url={''} />)

    const button = screen.getByTestId('button-cart')

    expect(button).toHaveTextContent('15')
  })

  it('should have a ancor tag with href /checkout/cart', () => {
    render(<BagCart itensCart={15} url={'/checkout/cart'} />)

    const ancor = screen.getByTestId('button-link')

    expect(ancor).toHaveAttribute('href', '/checkout/cart')
  })
})
