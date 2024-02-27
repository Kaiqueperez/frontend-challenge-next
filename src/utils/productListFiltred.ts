import { ProductsProps } from "@/types/Products";

export const productListFiltred = (
  productList: ProductsProps[],
  filterParamns: string
) => {
  const lowerCase = (name: string) => name.toLowerCase();

  return productList.filter((item) =>
    lowerCase(item.name).includes(lowerCase(filterParamns).trimStart())
  );
};
