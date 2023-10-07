import { getProductsRepository } from "@/repositories/getProducts";

export const getProductsUseCase = async (repository: getProductsRepository) => {
  const products = await repository.getProducts();

  const allProduct = products.data.allProducts;

  return allProduct;
};
