'use client'
import { Toast } from '@/components'
import { Container } from '@/components/Container'
import { getAllProductsImpl } from '@/repositories/getProducts'
import { useBagCartStore } from '@/store'
import { getChossenProductUseCase } from '@/useCases/getChossenProductUseCase'
import { urlParamsSliced } from '@/utils/urlParamsSliced'
import { useState } from 'react'
import useSWR from 'swr'
import ProductInfo from './components/ProductInfo'

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
  const { data: choosenProduct, isLoading } = useSWR('getChoosenProdcut', () =>
    getChossenProductUseCase(price, getAllProductsImpl)
  )

  const { setBagCartProduct } = useBagCartStore()

  return (
    <Container>
      {isLoading ? (
        <p>Loading...</p>
      ) : choosenProduct ? (
        <>
          <Toast
            needShow={showToast}
            toastText="Produto adicionado com sucesso!"
          />
          <ProductInfo
            choosenProduct={choosenProduct}
            sendProductToCart={setBagCartProduct}
            toastHandler={handleToast}
            disabledButton={showToast}
          />
        </>
      ) : null}
    </Container>
  )
}
