import { getProductsRepository } from "@/repositories/getProducts";
import { ProductsProps } from "@/types/Products";

export const getChossenProductUseCase = async (
  filter: number,
  repository: getProductsRepository
) => {
  const products = await repository.getProducts();

  const allProduct = products.data.allProducts as ProductsProps[];

  const chossenProduct = allProduct.find(
    (product) => product.price_in_cents === filter
  );

  return chossenProduct;
};
