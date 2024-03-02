import { Button } from '@/components/Button/styles'
import styled from 'styled-components'

export const CheckoutSection = styled.section`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 2fr 1.5fr;
  grid-template-rows: 1fr 5fr 1fr;
  grid-template-areas:
    'your-cart your-cart resume'
    'product-list product-list resume'
    'product-list product-list resume';

  div:first-child {
    grid-area: your-cart;
  }
`

export const ProductPreview = styled.div`
  p {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 500;
  }
`

export const ProductsWrapper = styled.div`
  grid-area: product-list;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Products = styled.div`
  max-width: 736px;
  display: flex;
  gap: 31px;

  img {
    max-width: 256px;
    max-height: 211px;
    border-radius: 10px 0 0 10px;
  }
`

export const ProductDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  div:first-child,
  div:last-child {
    display: flex;
    justify-content: space-between;
  }
`

export const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 280px;
  grid-area: resume;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    h5 {
      text-transform: uppercase;
      font-size: 20px;
      font-weight: 600;
    }
  }
`

export const SubtotalPriceDelivery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 32px 24px 24px 24px;
  gap: 16px;

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`

export const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 32px 24px 24px 24px;
  width: 100%;

  hr {
    width: 100%;
    background-color: #dce2e5;
  }
  div {
    display: flex;
    width: 100%;
    justify-content: space-between;

    p,
    span {
      font-weight: 600;
    }
  }
`

export const BuyButton = styled(Button)`
  color: #f5f5fa;
  width: 100%;
  border-radius: 4px;
  padding: 16px;
  background-color: #51b853;
`

export const QuestionsAnswers = styled.div`
  display: flex;
  flex-direction: column;
  align-self: baseline;
  gap: 12px;

  a {
    text-transform: uppercase;
    text-decoration: underline;
    color: #737380;
    line-height: 21px;
  }
`

export const CustomSelect = styled.div`
  position: relative;
  select {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    font-size: 1.15rem;
    padding: 16px;
    background-color: #fff;
    border: 1px solid #a8a8b3;
    border-radius: 8px;
    color: #000;
    cursor: pointer;
  }
`
