'use client'

import { Container } from '@/components/Container'
import { ImageComponent } from '@/components/ImageComponent'
import useStore from '@/hooks/useStore'
import { BagCartStore, useBagCartStore } from '@/store'
import { centsToBrazilianCurrency } from '@/utils'
import Link from 'next/link'

export default function Page({ params }: { params: { checkout: string } }) {
  const cartBag = useStore<BagCartStore, BagCartStore>(
    useBagCartStore,
    (state: any) => state
  )

  const { products, removeProduct } = cartBag ?? {}

  const subTotalPrice = products?.reduce(
    (acc, product) => acc + product.price_in_cents,
    4000
  )

  return (
    <Container>
      {products?.length === 0 ? (
        <section>
          <p>Seu carrinho esta vazio...</p>
          <Link href={'/'}>Voltar para Home</Link>
        </section>
      ) : (
        <section>
          {products?.map((product, index) => (
            <div key={index}>
              <ImageComponent src={product.image_url} />
              <div>
                <h4>{product.name}</h4>
                <p>{product.description}</p>

                <span>{centsToBrazilianCurrency(product.price_in_cents)}</span>
              </div>
              <button onClick={() => removeProduct!(index)}>Delete</button>
            </div>
          ))}

          {products?.length! >= 1 && (
            <div>
              <h5>Resumo do pedido</h5>
              <div>
                <p>subtotal de produtos </p>
                <span>{centsToBrazilianCurrency(subTotalPrice!)}</span>
              </div>
            </div>
          )}
        </section>
      )}
    </Container>
  )
}
