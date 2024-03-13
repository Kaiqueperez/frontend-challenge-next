import { CardsProducts } from '@/components'
import { fireEvent, render, screen } from '@testing-library/react'
import { allProducts } from '../mock'
import { createMockRouter } from '../utils-tests/createMockRouter'

describe('Card Component', () => {
  it('should show message when search not found product', () => {
    const filterParams = 'produto3'

    render(
      <CardsProducts
        allProducts={allProducts}
        pushOfUseRouter={createMockRouter({}).push}
        filterParams={filterParams}
      />
    )

    expect(screen.getByText('Produto não encontrado')).toBeInTheDocument()
  })

  it('should render the products', () => {
    const filterParams = ''

    render(
      <CardsProducts
        allProducts={allProducts}
        pushOfUseRouter={createMockRouter({}).push}
        filterParams={filterParams}
      />
    )

    expect(screen.getByText('Product1')).toBeInTheDocument()
    expect(screen.getByText('Product2')).toBeInTheDocument()
  })

  it('should return filtred list', () => {
    const filterParams = 'product1'

    const filtredList = allProducts.filter(
      (item) => item.name.toLowerCase() === filterParams
    )

    render(
      <CardsProducts
        allProducts={allProducts}
        pushOfUseRouter={createMockRouter({}).push}
        filterParams={filterParams}
      />
    )
    expect(screen.getByText('Product1')).toBeInTheDocument()
    expect(filtredList.length).toBe(1)
  })

  it('should push to product page when click in the product', () => {
    const filterParams = ''

    const router = createMockRouter({})

    render(
      <CardsProducts
        allProducts={allProducts}
        pushOfUseRouter={router.push}
        filterParams={filterParams}
      />
    )

    fireEvent.click(screen.getByText('Product1'))

    expect(router.push).toHaveBeenCalledWith(
      '/product/product=Product1&price=100'
    )
  })
})
