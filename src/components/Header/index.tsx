"use client";
import { useBagCartStore } from "@/store/produtsStore";
import { BagCart } from "../BagCart";
import { SearchField } from "../SearchField";
import * as S from "./styles";
interface HeaderProps {
  children?: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  const { product } = useBagCartStore();

  return (
    <S.Header>
      <div>
        <h1> Capputeeno</h1>
      </div>

      <S.WrapperBagAndSearh>
        <SearchField.Root>
          <SearchField.Input
            icon="Search.svg"
            placeholder="Procurando por algo específico?"
          />
        </SearchField.Root>
        <BagCart itensCart={product.length} />
      </S.WrapperBagAndSearh>
    </S.Header>
  );
};
