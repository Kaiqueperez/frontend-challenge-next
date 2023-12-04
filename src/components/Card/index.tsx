import { ProductsProps } from "@/types/Products";
import Link from "next/link";
import { ImageComponent } from "../ImageComponent";
import * as S from "./styles";

const BasicFilter: { [key: string]: string | ProductsProps[] } = {
  Camiseta: "Camiseta",
  Caneca: "Caneca",
  allProducts: "",
};

type CardProps = {
  allProducts: ProductsProps[];
  filtradedProducts?: ProductsProps[];
  filterParams: string;
};
export const Card = ({
  allProducts,
  filtradedProducts,
  filterParams,
}: CardProps) => {
  return filterParams === BasicFilter[filterParams] ? (
    <S.CardWrapper>
      {filtradedProducts?.map((product) => (
        <S.Card key={product.created_at}>
          <ImageComponent src={product.image_url} />
          <div className="card-content">
            <p>{product.name}</p>
            <span className="line"></span>
            <span>{product.price_in_cents}</span>
          </div>
        </S.Card>
      ))}
    </S.CardWrapper>
  ) : (
    <S.CardWrapper>
      {allProducts.map((product) => (
        <S.Card key={product.created_at}>
          <ImageComponent src={product.image_url} />
          <div className="card-content">
            <Link href={`about/${product.name}`}>
              <p>{product.name}</p>
              <span className="line"></span>
              <span>{product.price_in_cents}</span>
            </Link>
          </div>
        </S.Card>
      ))}
    </S.CardWrapper>
  );
};
