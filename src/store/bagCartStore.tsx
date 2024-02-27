import { ProductsProps } from '@/types/Products'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type BagCartStore = {
  products: ProductsProps[]
  setBagCartProduct?: (by: ProductsProps) => void
  removeProduct: (productIndex: number) => void
}

type SearchValueStore = {
  searcFilterhValue: string
  setSearchFilterValue: (value: string) => void
}

export const useBagCartStore = create<BagCartStore>()(
  persist(
    (set, get) => ({
      products: [],
      setBagCartProduct: (by) =>
        set((state) => ({ products: [...state.products, by] })),
      removeProduct: (productIndex: number) => {
        const { products } = get()
        products.splice(productIndex, 1)
        set(() => ({ products }))
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
