'use client'
import { useBagCartStore, useFilterListState } from '@/store'
import Link from 'next/link'
import { BagCart } from '../BagCart'
import { SearchField } from '../SearchField'
import * as S from './styles'

export const Header = () => {
  const { amountItens } = useBagCartStore()

  const { setSearchFilterValue, searcFilterhValue } = useFilterListState()

  return (
    <S.Header>
      <div>
        <Link href="/">
          <h1> Capputeeno</h1>
        </Link>
      </div>

      <S.WrapperBagAndSearh>
        <SearchField.Root>
          <SearchField.Input
            value={searcFilterhValue}
            icon="Search.svg"
            placeholder="Procurando por algo específico?"
            onChange={(e) => setSearchFilterValue(e.currentTarget.value)}
          />
        </SearchField.Root>
        <BagCart itensCart={amountItens ?? 0} />
      </S.WrapperBagAndSearh>
    </S.Header>
  )
}
