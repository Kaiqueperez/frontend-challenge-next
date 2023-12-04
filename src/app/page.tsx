"use client";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Filters } from "@/components/Filters";
import { Header } from "@/components/Header";
import { Section } from "@/components/SectionWrapper/styles";
import { getAllProductsImpl } from "@/repositories/getProducts";
import { ProductsProps } from "@/types/Products";
import { getProductsUseCase } from "@/useCases/getProductsUseCase";
import { useEffect, useState } from "react";

export default function Home() {
  const [testing, setTesting] = useState<ProductsProps[]>();
  const [filterParam, setFilterParam] = useState<string>("");

  const filtredList = testing?.filter((item) =>
    item.name.includes(filterParam)
  );

  // const filteredListProducts: { [keyof: string]: ProductsProps[] } = {
  //   highToLow: [...testing!].sort(
  //     (a, b) => a.price_in_cents - b.price_in_cents
  //   ),

  //   lowToHigh:
  //     filtredList?.sort(
  //       (high, low) => high.price_in_cents - low.price_in_cents
  //     ) ?? [],
  // };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductsUseCase(getAllProductsImpl);
      setTesting(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Section>
          <Filters setFilterParam={setFilterParam} />
          <Card
            allProducts={testing ?? []}
            filtradedProducts={filtredList}
            filterParams={filterParam}
          />
        </Section>
      </Container>
    </>
  );
}
