import ProductInfo, {
    ProductDescripitonProps,
} from '@/app/product/[productProps]/components/ProductInfo'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

const choosenProduct = {
  id: '1',
  name: 'Camisa bolada demias',
  description: 'Camisa bolada demais, muito bonita e confortável',
  price_in_cents: 1000,
  image_url: 'https://example.com/image.jpg',
  category: 'clothes',
  created_at: '2022-01-01',
  sales: 10,
  itemCount: 5,
}

const props: ProductDescripitonProps = {
  choosenProduct: choosenProduct,
  sendProductToCart: jest.fn(),
  toastHandler: jest.fn(),
  disabledButton: false,
}
describe('Page of product', () => {
  it('should render component', () => {
    const { baseElement } = render(<ProductInfo {...props} />)

    expect(baseElement).toBeInTheDocument()
  })

  it('should add product to cart and show toast', () => {
    const { getByText } = render(<ProductInfo {...props} />)

    const button = getByText('Adicionar ao Carrinho')

    button.click()

    expect(props.sendProductToCart).toHaveBeenCalledTimes(1)
    expect(props.toastHandler).toHaveBeenCalledTimes(1)

    props.disabledButton = true
    expect(props.disabledButton).toBeTruthy()
  })
})
