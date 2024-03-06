import { ProductsProps } from "@/types/Products"

export const returnProductIndex = (
    productsList: ProductsProps[],
    productId: string
  ) => {
    return productsList.findIndex((product) => product.id === productId)
  }