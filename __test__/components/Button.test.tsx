import Button from '@/components/Button'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Button component', () => {
  it('should render component', () => {
    render(
      <Button>
        <p>Bolado demais</p>
      </Button>
    )

    const button = screen.getByRole('button')
    const paragraph = screen.getByText('Bolado demais')

    expect(button).toBeInTheDocument()
    expect(paragraph).toHaveTextContent('Bolado demais')
  })
})
