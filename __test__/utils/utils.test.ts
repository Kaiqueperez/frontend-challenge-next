import {
    centsToBrazilianCurrency,
    productNameSliced,
    returnProductIndex,
    urlParamsSliced,
} from '@/utils'
import '@testing-library/jest-dom'
import { allProducts } from '../mock'

describe('Utils', () => {
  it('should return value formated ', () => {
    const expectedValue = '120,00'
    const receivedValue = centsToBrazilianCurrency(12000).replace(/\s|R\$/g, '')

    expect(receivedValue).toEqual(expectedValue)
  })

  it('should return index of product ', () => {
    expect(returnProductIndex(allProducts, '3')).toBe(1)
    expect(returnProductIndex(allProducts, '2')).toBe(0)
  })

  it('should sliced url paramns and return just the price of product ', () => {
    expect(urlParamsSliced('product%3DCamiseta%20Ramones%26price%3D3805')).toBe(
      3805
    )
  })

  it('should sliced product name and return just first name ', () => {
    expect(productNameSliced('Camiseta Ramones')).toBe('Camiseta')
    expect(productNameSliced('Caneca da alegria')).toBe('Caneca')
  })
})
