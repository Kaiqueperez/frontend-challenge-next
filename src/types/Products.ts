export type Products = {
  allProducts: any;
};

export type ProductsProps = {
  category: string;
  created_at: string;
  description: string;
  image_url: string;
  name: string;
  price_in_cents: number;
  sales: number;
};

export type ProductsData<T> = {
  data: T;
};
