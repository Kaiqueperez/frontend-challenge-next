"use client";

import { Container } from "@/components/Container";
import { ImageComponent } from "@/components/ImageComponent";
import { useBagCartStore } from "@/store";
import { centsToBrazilianCurrency } from "@/utils";
export default function Page({ params }: { params: { checkout: string } }) {
  const { product, refreshBagCartProduct } = useBagCartStore();

  const subTotalPrice = product.reduce(
    (acc, product) => acc + product.price_in_cents,
    4000
  );

  const deleteProduct = (index: number) => {
    product.splice(index, 1);
    refreshBagCartProduct!(product);
  };

  return (
    <Container>
      (
      <section>
        {product.map((product, index) => (
          <div key={index}>
            <ImageComponent src={product.image_url} />
            <div>
              <h4>{product.name}</h4>
              <p>{product.description}</p>

              <span>{centsToBrazilianCurrency(product.price_in_cents)}</span>
            </div>
            <button onClick={() => deleteProduct(index)}>Delete</button>
          </div>
        ))}

        <div>
          <h5>Resumo do pedido</h5>
          <div>
            <p>subtotal de produtos </p>
            <span>{centsToBrazilianCurrency(subTotalPrice)}</span>
          </div>
        </div>
      </section>
      )
    </Container>
  );
}
