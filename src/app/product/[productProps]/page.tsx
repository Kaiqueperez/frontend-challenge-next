"use client";

import { Container } from "@/components/Container";
import { ImageComponent } from "@/components/ImageComponent";
import { getAllProductsImpl } from "@/repositories/getProducts";
import { useBagCartStore } from "@/store";
import { getChossenProductUseCase } from "@/useCases/getChossenProductUseCase";
import { centsToBrazilianCurrency, productNameSliced } from "@/utils";
import { urlParamsSliced } from "@/utils/urlParamsSliced";
import Link from "next/link";
import useSWR from "swr";

export default function Page({ params }: { params: { productProps: string } }) {
  const price = urlParamsSliced(params.productProps);

  const { data: choosenProduct, isLoading } = useSWR("testFilter", () =>
    getChossenProductUseCase(price, getAllProductsImpl)
  );

  const { setBagCartProduct } = useBagCartStore();

  return (
    <Container>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <section>
          <div>
            <button>
              <Link href={"/"}>Voltar</Link>
            </button>

            <ImageComponent src={choosenProduct?.image_url} />
          </div>

          <div>
            <span>{productNameSliced(choosenProduct?.name ?? "")}</span>
            <h2>{choosenProduct?.name}</h2>
            <p>{centsToBrazilianCurrency(choosenProduct?.price_in_cents!)}</p>
            <p>
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </p>
            <div>
              <h4>Descrição</h4>
              <p>{choosenProduct?.description}</p>
            </div>
          </div>

          <button onClick={() => setBagCartProduct!(choosenProduct!)}>
            Adicionar ao Carrinho
          </button>
        </section>
      )}
    </Container>
  );
}
