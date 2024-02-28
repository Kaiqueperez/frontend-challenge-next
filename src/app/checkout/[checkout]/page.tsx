'use client'

import { Container } from '@/components/Container'
import { ImageComponent } from '@/components/ImageComponent'
import useStore from '@/hooks/useStore'
import { BagCartStore, useBagCartStore } from '@/store'
import { centsToBrazilianCurrency } from '@/utils'
import Link from 'next/link'
import * as S from './styles'

export default function Page() {
  const cartBag = useStore<BagCartStore, BagCartStore>(
    useBagCartStore,
    (state: any) => state
  )

  const { products, removeProduct } = cartBag ?? {}

  const subTotalPrice = products?.reduce(
    (acc, product) => acc + product.price_in_cents,
    0
  )

  return (
    <Container>
      {products?.length === 0 ? (
        <section>
          <p>Seu carrinho esta vazio...</p>
          <Link href={'/'}>Voltar para Home</Link>
        </section>
      ) : (
        <S.CheckoutSection>
          <S.ProductPreview>
            <Link href={'/'}>Voltar para Home</Link>
            <p>Seu carrinho</p>
            <span>
              {`Total (${products?.length}) produtos`}{' '}
              <b>{centsToBrazilianCurrency(subTotalPrice ?? 0)}</b>
            </span>
          </S.ProductPreview>

          <S.ProductsWrapper>
            {products?.map((product, index) => (
              <S.Products key={index}>
                <ImageComponent src={product.image_url} />
                <S.ProductDescriptionWrapper>
                  <div>
                    <h4>{product.name}</h4>
                    <button onClick={() => removeProduct!(index)}>
                      Delete
                    </button>
                  </div>
                  <p>{product.description}</p>
                  <div>
                    <select name="" id="">
                      <option value="">1</option>
                    </select>
                    <span>
                      {centsToBrazilianCurrency(product.price_in_cents)}
                    </span>
                  </div>
                </S.ProductDescriptionWrapper>
              </S.Products>
            ))}
          </S.ProductsWrapper>

          {products?.length! >= 1 && (
            <S.ResumeWrapper>
              <section>
                <h5>Resumo do pedido</h5>

                <S.SubtotalPriceDelivery>
                  <div>
                    <p>Subtotal de produtos </p>
                    <span>{centsToBrazilianCurrency(subTotalPrice!)}</span>
                  </div>
                  <div>
                    <p>Entrega</p>
                    <span>{centsToBrazilianCurrency(4000)}</span>
                  </div>
                </S.SubtotalPriceDelivery>

                <S.TotalPrice>
                  <hr />

                  <div>
                    <p>Total</p>
                    <span>{centsToBrazilianCurrency(4000)}</span>
                  </div>
                </S.TotalPrice>
                <S.BuyButton>
                  <p>Finalizar compra</p>
                </S.BuyButton>
              </section>

              <S.QuestionsAnswers>
                <Link href={'#'}>Ajuda</Link>
                <Link href={'#'}>Reembolsos</Link>
                <Link href={'#'}>Entregas e frete</Link>
                <Link href={'#'}>Trocas e devoluções</Link>
              </S.QuestionsAnswers>
            </S.ResumeWrapper>
          )}
        </S.CheckoutSection>
      )}
    </Container>
  )
}
