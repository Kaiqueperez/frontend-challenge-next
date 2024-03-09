import Button from '@/components/Button'
import { FlexColComponent } from '@/components/FlexColComponent/styles'
import styled from 'styled-components'

export const WrapperProductInfo = styled.section`
  display: flex;
  gap: 32px;
`

export const WrapperImage = styled(FlexColComponent)`
  gap: 23.5px;
  width: 640px;
  align-items: flex-start;
`

export const WrapperProductDescriton = styled(FlexColComponent)`
  justify-content: space-between;
  padding-top: 36.5px;
`

export const ProductTitle = styled(FlexColComponent)`
  gap: 12px;
  span {
    font-weight: 400;
    color: #41414d;
  }
  h2 {
    font-size: 32px;
    color: #41414d;
  }

  padding-bottom: 8px;
`

export const ValueAndDeliveryTaxes = styled(FlexColComponent)`
  gap: 24px;

  p:first-child {
    color: #09090a;
    font-weight: 600;
    font-size: 20px;
  }
`

export const Description = styled(FlexColComponent)`
  gap: 8px;
  padding-top: 58px;
`
export const BackButton = styled(Button)`
  a {
    color: #617480;
    font-size: 14px;
  }
`
export const AddToCartButton = styled(Button)`
  background-color: #115d8c;
  border-radius: 4px;
  height: 44px;
  text-transform: uppercase;
  font-weight: 500;
  color: #f5f5fa;

  :disabled {
    background-color: #ccc;
    color: #09090a;
  }
`
