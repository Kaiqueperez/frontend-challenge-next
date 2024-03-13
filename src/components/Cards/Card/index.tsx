import { ImageComponent } from '@/components'
import { ProductsProps } from '@/types/Products'
import { centsToBrazilianCurrency } from '@/utils'
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import * as S from './styles'

type CardProps = {
  product: ProductsProps
  pushToProductPage: (
    href: string,
    options?: NavigateOptions | undefined
  ) => void
}

const Card = ({ product, pushToProductPage }: CardProps) => {
  return (
    <S.Card
      onClick={() =>
        pushToProductPage(
          `/product/product=${product.name}&price=${product.price_in_cents}`
        )
      }
    >
      <ImageComponent src={product.image_url} />
      <div className="card-content">
        <p>{product.name}</p>
        <span className="line"></span>
        <span>{centsToBrazilianCurrency(product.price_in_cents)}</span>
      </div>
    </S.Card>
  )
}

export default Card
