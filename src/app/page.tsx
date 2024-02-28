'use client'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { Filters } from '@/components/Filters'
import { Pagination } from '@/components/Pagination'
import { Section } from '@/components/SectionWrapper/styles'
import usePagination from '@/hooks/usePagination'
import { getAllProductsImpl } from '@/repositories/getProducts'
import { useFilterListState } from '@/store'
import { getProductsUseCase } from '@/useCases/getProductsUseCase'
import { useState } from 'react'
import useSWR from 'swr'

export default function Home() {
  const { data: allProducts, isLoading } = useSWR('getAllProducts', () =>
    getProductsUseCase(getAllProductsImpl)
  )
  const [filterParam, setFilterParam] = useState('')

  const {
    POST_PER_PAGE,
    currentPage,
    productLength,
    setCurrentPage,
    currentProducts,
  } = usePagination(allProducts ?? [])

  const { searcFilterhValue } = useFilterListState()

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
              totalOfProducts={productLength}
              productsPerPage={POST_PER_PAGE}
              setCurrentPage={setCurrentPage}
            />
            <Card
              allProducts={currentProducts ?? []}
              filterParams={searcFilterhValue || filterParam}
            />
            <Pagination
              currentPage={currentPage}
              totalOfProducts={productLength}
              productsPerPage={POST_PER_PAGE}
              setCurrentPage={setCurrentPage}
            />
          </Section>
        </Container>
      )}
    </>
  )
}
