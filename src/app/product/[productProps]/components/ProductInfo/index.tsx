import { ImageComponent } from '@/components'
import { ProductsProps } from '@/types/Products'
import { centsToBrazilianCurrency, productNameSliced } from '@/utils'
import Link from 'next/link'
import * as S from './styles'

type ProductDescripitonProps = {
  choosenProduct: ProductsProps
  sendProductToCart: ((newProduct: ProductsProps) => void) | undefined
  toastHandler: () => void
  disabledButton: boolean
}

const ProductInfo = ({
  choosenProduct,
  disabledButton,
  sendProductToCart,
  toastHandler,
}: ProductDescripitonProps) => {
  return (
    <S.WrapperProductInfo>
      <S.WrapperImage>
        <S.BackButton>
          <Link href={'/'}>Voltar</Link>
        </S.BackButton>

        <ImageComponent src={choosenProduct.image_url} />
      </S.WrapperImage>

      <S.WrapperProductDescriton>
        <div>
          <S.ProductTitle>
            <span>{productNameSliced(choosenProduct.name)}</span>
            <h2>{choosenProduct.name}</h2>
          </S.ProductTitle>
          <S.ValueAndDeliveryTaxes>
            <p>{centsToBrazilianCurrency(choosenProduct.price_in_cents!)}</p>
            <p>
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </p>
          </S.ValueAndDeliveryTaxes>

          <S.Description>
            <h4>Descrição</h4>
            <p>{choosenProduct.description}</p>
          </S.Description>
        </div>

        {!!choosenProduct && (
          <S.AddToCartButton
            disabled={disabledButton}
            onClick={() => {
              sendProductToCart!(choosenProduct)
              toastHandler()
            }}
          >
            Adicionar ao Carrinho
          </S.AddToCartButton>
        )}
      </S.WrapperProductDescriton>
    </S.WrapperProductInfo>
  )
}

export default ProductInfo
