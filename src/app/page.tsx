"use client";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Filters } from "@/components/Filters";
import { Pagination } from "@/components/Pagination";
import { Section } from "@/components/SectionWrapper/styles";
import { getAllProductsImpl } from "@/repositories/getProducts";
import { getProductsUseCase } from "@/useCases/getProductsUseCase";
import { useState } from "react";
import useSWR from "swr";

export default function Home() {
  const [filterParam, setFilterParam] = useState<string>("");

  const [currentPage, setCurrentPage] = useState(1);

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

  const POST_PER_PAGE = 12;

  const indexOfLastPost = currentPage * POST_PER_PAGE;

  const indexOfFirstPost = indexOfLastPost - POST_PER_PAGE;

  const currentProducts = allProducts
    ? allProducts.slice(indexOfFirstPost, indexOfLastPost)
    : [];

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Container>
          <Section>
            <Filters setFilterParam={setFilterParam} />
            <Pagination
              currentPage={currentPage}
              totalOfProducts={allProducts.length}
              productsPerPage={POST_PER_PAGE}
              setCurrentPage={setCurrentPage}
            />
            <Card
              allProducts={currentProducts ?? []}
              filterParams={filterParam}
            />
            <Pagination
              currentPage={currentPage}
              totalOfProducts={allProducts.length}
              productsPerPage={POST_PER_PAGE}
              setCurrentPage={setCurrentPage}
            />
          </Section>
        </Container>
      )}
    </>
  );
}
