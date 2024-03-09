import { Card } from '@/components'
import { fireEvent, render, screen } from '@testing-library/react'
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { createMockRouter } from '../utils/createMockRouter'

const allProducts = [
  {
    name: 'Product1',
    price_in_cents: 100,
    image_url: 'product1.jpg',
    id: '2',
    category: 'Camisa',
    created_at: '20/20/20',
    description: 'ovo',
    sales: 66,
    itemCount: 1,
  },
  {
    name: 'Product2',
    price_in_cents: 200,
    image_url: 'product2.jpg',
    id: '2',
    category: 'Camisa',
    created_at: '20/20/20',
    description: 'ovo',
    sales: 66,
    itemCount: 1,
  },
]

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
