"use client";
import { useBagCartStore } from "@/store";
import Link from "next/link";
import { BagCart } from "../BagCart";
import { SearchField } from "../SearchField";
import * as S from "./styles";

export const Header = () => {
  const { product } = useBagCartStore();

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
            icon="Search.svg"
            placeholder="Procurando por algo específico?"
          />
        </SearchField.Root>
        <BagCart itensCart={product.length} />
      </S.WrapperBagAndSearh>
    </S.Header>
  );
};
