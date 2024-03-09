import { Pagination } from '@/components'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

const setCurrentPages = jest.fn()

describe('Pagination component', () => {
  it('should render component', () => {
    render(
      <Pagination
        currentPage={1}
        productsPerPage={10}
        setCurrentPage={setCurrentPages}
        totalOfProducts={66}
      />
    )
    const buttonPagination = screen.getByTestId(
      'button-with-number-pagination-5'
    )

    expect(buttonPagination).toBeInTheDocument()
  })

  it('should call function when button recieve click', () => {
    render(
      <Pagination
        currentPage={1}
        productsPerPage={10}
        setCurrentPage={setCurrentPages}
        totalOfProducts={66}
      />
    )
    const buttonPagination = screen.getByTestId(
      'button-with-number-pagination-6'
    )

    fireEvent.click(buttonPagination)

    expect(setCurrentPages).toHaveBeenCalledTimes(1)
  })

  it('should not render the back button when current page be first', () => {
    render(
      <Pagination
        currentPage={1}
        productsPerPage={10}
        setCurrentPage={setCurrentPages}
        totalOfProducts={66}
      />
    )
    const backButtonPagination = screen.queryByTestId(
      'button-left-arrow-pagination'
    )

    expect(backButtonPagination).not.toBeInTheDocument()
  })

  it('should not render the foward button when current page be last', () => {
    render(
      <Pagination
        currentPage={7}
        productsPerPage={10}
        setCurrentPage={setCurrentPages}
        totalOfProducts={66}
      />
    )
    const backButtonPagination = screen.queryByTestId(
      'button-right-arrow-pagination'
    )

    expect(backButtonPagination).not.toBeInTheDocument()
  })
})
