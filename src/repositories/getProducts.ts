import { Products, ProductsData } from "@/types/Products";

export type getProductsRepository = {
  getProducts: () => Promise<ProductsData<Products>>;
};

const query = `
      query {
        allProducts {
          name
          description
          image_url
          category
          price_in_cents
          sales
          created_at
        }
      }
    `;

export const getAllProductsImpl: getProductsRepository = {
  getProducts: async (): Promise<ProductsData<Products>> => {
    try {
      const response = await fetch("http://localhost:3333/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
