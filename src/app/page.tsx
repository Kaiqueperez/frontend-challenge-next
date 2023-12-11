"use client";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Filters } from "@/components/Filters";
import { Section } from "@/components/SectionWrapper/styles";
import { getAllProductsImpl } from "@/repositories/getProducts";
import { getProductsUseCase } from "@/useCases/getProductsUseCase";
import { useState } from "react";
import useSWR from "swr";

export default function Home() {
  const [filterParam, setFilterParam] = useState<string>("");

  // const filteredListProducts: { [keyof: string]: ProductsProps[] } = {
  //   highToLow: [...testing!].sort(
  //     (a, b) => a.price_in_cents - b.price_in_cents
  //   ),

  //   lowToHigh:
  //     filtredList?.sort(
  //       (high, low) => high.price_in_cents - low.price_in_cents
  //     ) ?? [],
  // };

  const { data: allProducts, isLoading } = useSWR("getAllProducts", () =>
    getProductsUseCase(getAllProductsImpl)
  );

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Container>
          <Section>
            <Filters setFilterParam={setFilterParam} />
            <Card allProducts={allProducts ?? []} filterParams={filterParam} />
          </Section>
        </Container>
      )}
    </>
  );
}
