export type Products = {
  allProducts: ProductsProps[]
}

export type ProductsProps = {
  id: string
  category: string
  created_at: string
  description: string
  image_url: string
  name: string
  price_in_cents: number
  sales: number
  itemCount: number
}

export type ProductsData<T> = {
  data: T
}
