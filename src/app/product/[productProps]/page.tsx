'use client'
import { Container } from '@/components/Container'
import { ImageComponent } from '@/components/ImageComponent'
import { Toast } from '@/components/Toast'
import { getAllProductsImpl } from '@/repositories/getProducts'
import { useBagCartStore } from '@/store'
import { getChossenProductUseCase } from '@/useCases/getChossenProductUseCase'
import { centsToBrazilianCurrency, productNameSliced } from '@/utils'
import { urlParamsSliced } from '@/utils/urlParamsSliced'
import Link from 'next/link'
import { useState } from 'react'
import useSWR from 'swr'
import * as S from './styles'

export default function Page({
  params,
}: Readonly<{ params: { productProps: string } }>) {
  const [showToast, setShowToast] = useState(false)

  const price = urlParamsSliced(params.productProps)

  const handleToast = () => {
    setShowToast(true)
    setTimeout(() => {
      setShowToast((prev) => !prev)
    }, 1000)
  }
  const { data: choosenProduct, isLoading } = useSWR('testFilter', () =>
    getChossenProductUseCase(price, getAllProductsImpl)
  )

  console.log(choosenProduct?.name)
  console.log(productNameSliced(choosenProduct?.name!))

  const { setBagCartProduct } = useBagCartStore()

  return (
    <Container>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <S.WrapperProductInfo>
          <Toast
            needShow={showToast}
            toastText="Produto adicionado com sucesso!"
          />
          <S.WrapperImage>
            <S.BackButton>
              <Link href={'/'}>Voltar</Link>
            </S.BackButton>

            <ImageComponent src={choosenProduct?.image_url} />
          </S.WrapperImage>

          <S.WrapperProductDescriton>
            <div>
              <S.ProductTitle>
                <span>{productNameSliced(choosenProduct?.name ?? '')}</span>
                <h2>{choosenProduct?.name}</h2>
              </S.ProductTitle>
              <S.ValueAndDeliveryTaxes>
                <p>
                  {centsToBrazilianCurrency(choosenProduct?.price_in_cents!)}
                </p>
                <p>
                  *Frete de R$40,00 para todo o Brasil. Grátis para compras
                  acima de R$900,00.
                </p>
              </S.ValueAndDeliveryTaxes>

              <S.Description>
                <h4>Descrição</h4>
                <p>{choosenProduct?.description}</p>
              </S.Description>
            </div>

            {!!choosenProduct && (
              <S.AddToCartButton
                disabled={showToast}
                onClick={() => {
                  setBagCartProduct!(choosenProduct)
                  handleToast()
                }}
              >
                Adicionar ao Carrinho
              </S.AddToCartButton>
            )}
          </S.WrapperProductDescriton>
        </S.WrapperProductInfo>
      )}
    </Container>
  )
}
