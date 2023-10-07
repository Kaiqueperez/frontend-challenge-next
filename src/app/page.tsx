"use client";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { getAllProductsImpl } from "@/repositories/getProducts";
import { Products, ProductsData } from "@/types/Products";
import { getProductsUseCase } from "@/useCases/getProductsUseCase";
import { useEffect, useState } from "react";

export default function Home() {
  const [testing, setTesting] = useState<ProductsData<Products>[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductsUseCase(getAllProductsImpl);
      setTesting(data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Header />
      {/* {testing && testing.map((item: any) => <img src={item.image_url}></img>)} */}
    </Container>
  );
}
