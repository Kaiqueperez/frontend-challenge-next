import { ProductsProps } from '@/types/Products'
import { useState } from 'react'

const usePagination = (productsList: ProductsProps[]) => {
  const [currentPage, setCurrentPage] = useState(1)

  const POST_PER_PAGE = 12

  const indexOfLastPost = currentPage * POST_PER_PAGE

  const indexOfFirstPost = indexOfLastPost - POST_PER_PAGE

  const currentProducts = productsList
    ? productsList.slice(indexOfFirstPost, indexOfLastPost)
    : []

  const productLength = productsList.length

  return {
    setCurrentPage,
    POST_PER_PAGE,
    currentPage,
    productLength,
    currentProducts
  }
}

export default usePagination
