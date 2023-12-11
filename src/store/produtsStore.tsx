// import { ProductsProps } from "@/types/Products";
// import { create } from "zustand";

// interface ProductState {
//   product: ProductsProps;
//   setProduct: (by: ProductsProps) => void;
// }
// export const useProductStore = create<ProductState>((set) => ({
//   product: {
//     category: "",
//     created_at: "",
//     description: "",
//     image_url: "",
//     name: "",
//     price_in_cents: 0,
//     sales: 0,
//   },
//   setProduct: (by: ProductsProps) => set({ product: by }),
// }));

import { ProductsProps } from "@/types/Products";
import { create } from "zustand";

interface ProductsStore {
  product: ProductsProps[];
  setProduct?: (by: ProductsProps[]) => void;
  setBagCartProduct?: (by: ProductsProps) => void;
}

export const useProductStore = create<ProductsStore>()((set) => ({
  product: [],
  setProduct: (by) => set(() => ({ product: by })),
}));

export const useBagCartStore = create<ProductsStore>()((set) => ({
  product: [],
  setBagCartProduct: (by) =>
    set((state) => ({ product: [...state.product, by] })),
}));
