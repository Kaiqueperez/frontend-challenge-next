import { ProductsProps } from '@/types/Products'
import { productListFiltred } from '@/utils/productListFiltred'
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime'

import Card from './Card'
import * as S from './styles'

type CardProps = {
  allProducts: ProductsProps[]
  filterParams: string
  pushOfUseRouter: (href: string, options?: NavigateOptions | undefined) => void
}

export const CardsProducts = ({
  allProducts,
  filterParams,
  pushOfUseRouter,
}: CardProps) => {
  const filtredList = productListFiltred(allProducts, filterParams)

  const isEmpty = filtredList.length === 0

  return filterParams ? (
    <S.CardWrapper>
      {isEmpty ? (
        <div>Produto não encontrado</div>
      ) : (
        filtredList?.map((product, index) => (
          <Card
            key={product.id + index}
            product={product}
            pushToProductPage={pushOfUseRouter}
          />
        ))
      )}
    </S.CardWrapper>
  ) : (
    <S.CardWrapper>
      {allProducts.map((product, index) => (
        <Card
          key={product.id + index}
          product={product}
          pushToProductPage={pushOfUseRouter}
        />
      ))}
    </S.CardWrapper>
  )
}
