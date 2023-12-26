import { useProductStore } from "@/store/produtsStore";
import { ProductsProps } from "@/types/Products";
import { centsToBrazilianCurrency } from "@/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ImageComponent } from "../ImageComponent";
import * as S from "./styles";

const BasicFilter: { [key: string]: string | ProductsProps[] } = {
  Camiseta: "Camiseta",
  Caneca: "Caneca",
  allProducts: "",
};

type CardProps = {
  allProducts: ProductsProps[];
  filterParams: string;
};

export const Card = ({ allProducts, filterParams }: CardProps) => {
  const filtredList = allProducts?.filter((item) =>
    item.name.includes(filterParams)
  );

  const { setProduct } = useProductStore();

  useEffect(() => {
    if (allProducts) {
      setProduct!(allProducts);
    }
  }, [allProducts]);

  const { push } = useRouter();

  return filterParams === BasicFilter[filterParams] ? (
    <S.CardWrapper>
      {filtredList?.map((product, index) => (
        <S.Card
          key={index}
          onClick={() =>
            push(`/product/product=${product.name}&${product.price_in_cents}`)
          }
        >
          <ImageComponent src={product.image_url} />
          <div className="card-content">
            <p>{product.name}</p>
            <span className="line"></span>
            <span>{centsToBrazilianCurrency(product.price_in_cents)}</span>
          </div>
        </S.Card>
      ))}
    </S.CardWrapper>
  ) : (
    <S.CardWrapper>
      {allProducts.map((product, index) => (
        <S.Card
          key={index}
          onClick={() =>
            push(
              `/product/product=${product.name}&price=${product.price_in_cents}`
            )
          }
        >
          <ImageComponent src={product.image_url} />
          <div className="card-content">
            <p>{product.name}</p>
            <span className="line"></span>
            <span>{centsToBrazilianCurrency(product.price_in_cents)}</span>
          </div>
        </S.Card>
      ))}
    </S.CardWrapper>
  );
};
