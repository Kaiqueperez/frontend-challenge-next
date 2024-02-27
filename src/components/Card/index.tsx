import { ProductsProps } from "@/types/Products";
import { centsToBrazilianCurrency } from "@/utils";
import { productListFiltred } from "@/utils/productListFiltred";
import { useRouter } from "next/navigation";
import { ImageComponent } from "../ImageComponent";
import * as S from "./styles";

type CardProps = {
  allProducts: ProductsProps[];
  filterParams: string;
};

export const Card = ({ allProducts, filterParams }: CardProps) => {
  const filtredList = productListFiltred(allProducts, filterParams);

  const isEmpty = filtredList.length === 0;

  const { push } = useRouter();

  // const { isEmpty, setIsEmpty } = useIsEmptyState();

  // console.log(isEmpty);

  // useEffect(() => {
  //   () => setIsEmpty(filtredList);
  // }, [filtredList]);

  return filterParams ? (
    <S.CardWrapper>
      {isEmpty ? (
        <>Produto não encontrado</>
      ) : (
        filtredList?.map((product, index) => (
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
        ))
      )}
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
          <S.CardContent>
            <p>{product.name}</p>
            <span className="line"></span>
            <span id="price">
              {centsToBrazilianCurrency(product.price_in_cents)}
            </span>
          </S.CardContent>
        </S.Card>
      ))}
    </S.CardWrapper>
  );
};
