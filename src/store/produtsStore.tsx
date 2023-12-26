import { ProductsProps } from "@/types/Products";
import { create } from "zustand";

export type ProductsStore = {
  product: ProductsProps[];
  setProduct?: (by: ProductsProps[]) => void;
};

export const useProductStore = create<ProductsStore>()((set) => ({
  product: [],
  setProduct: (by) => set(() => ({ product: by })),
}));
