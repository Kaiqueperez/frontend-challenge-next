import { Card } from '@/components'
import { fireEvent, render, screen } from '@testing-library/react'
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { allProducts } from '../mock'
import { createMockRouter } from '../utils-tests/createMockRouter'



describe('Card Component', () => {
  it('should show message when search not found product', () => {
    const filterParams = 'produto3'

    render(
      <AppRouterContext.Provider value={createMockRouter({})}>
        <Card allProducts={allProducts} filterParams={filterParams} />
      </AppRouterContext.Provider>
    )

    expect(screen.getByText('Produto não encontrado')).toBeInTheDocument()
  }),

  it('should render the products', () => {
    const filterParams = ''

    render(
      <AppRouterContext.Provider value={createMockRouter({})}>
        <Card allProducts={allProducts} filterParams={filterParams} />
      </AppRouterContext.Provider>
    )

    expect(screen.getByText('Product1')).toBeInTheDocument()
    expect(screen.getByText('Product2')).toBeInTheDocument()
  }),
  
  it('should push to product page when click in the product', () => {
    const filterParams = ''

    const router = createMockRouter({})

    render(
      <AppRouterContext.Provider value={router}>
        <Card allProducts={allProducts} filterParams={filterParams} />
      </AppRouterContext.Provider>
    )

    fireEvent.click(screen.getByText('Product1'))

    expect(router.push).toHaveBeenCalledWith(
      '/product/product=Product1&price=100'
    )
  })

it('should return filtred list', () => {
  const filterParams = 'product1'

  const filtredList = allProducts.filter(
    (item) => item.name.toLowerCase() === filterParams
  )

  render(
    <AppRouterContext.Provider value={createMockRouter({})}>
      <Card allProducts={allProducts} filterParams={filterParams} />
    </AppRouterContext.Provider>
  )
  expect(screen.getByText('Product1')).toBeInTheDocument()
  expect(filtredList.length).toBe(1)
})
})
