import { ProductsProps } from "@/types/Products";
import { create } from "zustand";
import { ProductsStore } from ".";

type BagCartStore = {
  setBagCartProduct?: (by: ProductsProps) => void;
  refreshBagCartProduct?: (products: ProductsProps[]) => void;
} & ProductsStore;

export const useBagCartStore = create<BagCartStore>()((set) => ({
  product: [],
  setBagCartProduct: (by) =>
    set((state) => ({ product: [...state.product, by] })),
  refreshBagCartProduct: (products) => set(() => ({ product: [...products] })),
}));
