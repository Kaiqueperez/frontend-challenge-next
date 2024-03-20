import { ProductsProps } from '@/types/Products'
import { returnProductIndex } from '@/utils'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type BagCartStore = {
  products: ProductsProps[]
  subTotalPrice: number[]
  amountItens: number
  setBagCartProduct?: (newProduct: ProductsProps) => void
  removeProduct: (productIndex: string) => void
  incrementCart: (productId: string) => void
  decrementCart: (productId: string) => void
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

        const updateProductIndex = returnProductIndex(products, newProduct.id)

        const hasProductInCart = products[updateProductIndex]

        if (hasProductInCart) {
          products[updateProductIndex].itemCount += 1

          set((state) => {
            const { amountItens, subTotalPrice, products } = state

            const { price_in_cents } = products[updateProductIndex]

            return {
              amountItens: amountItens + 1,
              subTotalPrice: [...subTotalPrice, price_in_cents],
            }
          })
        } else {
          set((state) => {
            const { products, amountItens, subTotalPrice } = state

            return {
              products: [...products, newProduct],
              amountItens: amountItens + newProduct.itemCount,
              subTotalPrice: [...subTotalPrice, newProduct.price_in_cents],
            }
          })
        }
      },
      removeProduct: (productId) => {
        set((state) => {
          const { amountItens, products } = state
          const selectedProductDeleteIndex = returnProductIndex(
            products,
            productId
          )
          const selectProduct = products[selectedProductDeleteIndex]
          products.splice(selectedProductDeleteIndex, 1)
          return {
            subTotalPrice: products.map((item) => item.price_in_cents),
            amountItens: amountItens - selectProduct.itemCount,
          }
        })
      },
      incrementCart: (productId) => {
        set((state) => {
          const { amountItens, subTotalPrice, products } = state
          const incrementProductIndex = returnProductIndex(products, productId)

          const selectedProductIncrement = products[incrementProductIndex]

          selectedProductIncrement.itemCount += 1
          return {
            amountItens: amountItens + 1,
            subTotalPrice: [
              ...subTotalPrice,
              selectedProductIncrement.price_in_cents,
            ],
          }
        })
      },
      decrementCart: (productId) => {
        set((state) => {
          const { amountItens, subTotalPrice, products } = state

          const productDecrementIndex = returnProductIndex(products, productId)
          const decrementProduct = products[productDecrementIndex]
          decrementProduct.itemCount -= 1

          const updatedSubTotalPrice = subTotalPrice.filter(
            (_, index) => index !== productDecrementIndex
          )

          return {
            amountItens: amountItens - 1,
            subTotalPrice: updatedSubTotalPrice,
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
