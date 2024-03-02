import { ProductsProps } from '@/types/Products'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type BagCartStore = {
  products: ProductsProps[]
  subTotalPrice: number[]
  amountItens: number
  setBagCartProduct?: (newProduct: ProductsProps) => void
  removeProduct: (productIndex: string) => void
}

type SearchValueStore = {
  searcFilterhValue: string
  setSearchFilterValue: (value: string) => void
}

export const useBagCartStore = create<BagCartStore>()(
  persist(
    (set, get) => ({
      products: [],
      subTotalPrice: [],
      amountItens: 0,

      setBagCartProduct: (newProduct) => {
        const { products } = get()

        const hasProduct = products.includes(newProduct)

        const updateProduct = products.find((item) => item.id === newProduct.id)

        if (hasProduct && updateProduct) {
          updateProduct.itemCount += 1

          set((state) => {
            const { amountItens, subTotalPrice, products } = state

            console.log(subTotalPrice)

            return {
              amountItens: amountItens + 1,
            }
          })
        } else {
          set((state) => {
            const { products, amountItens } = state
            const prices = products.map((item) => item.price_in_cents)
            return {
              products: [...products, newProduct],
              amountItens: amountItens + newProduct.itemCount,
              subTotalPrice: [...prices, newProduct.price_in_cents],
            }
          })
        }
      },
      removeProduct: (productId: string) => {
        const { products } = get()
        const selectedProductDelete = products.find(
          (item) => item.id === productId
        )
        const productIndex = products.indexOf(selectedProductDelete!)

        products.splice(productIndex!, 1)

        set((state) => {
          const { amountItens, products } = state
          return {
            products,
            subTotalPrice: products.map((item) => item.price_in_cents),
            amountItens: amountItens - selectedProductDelete?.itemCount!,
          }
        })
      },
    }),
    {
      name: 'shop-storage',
    }
  )
)

export const useFilterListState = create<SearchValueStore>()((set) => ({
  searcFilterhValue: '',
  setSearchFilterValue: (value) => set(() => ({ searcFilterhValue: value })),
}))
