export const centsToBrazilianCurrency = (price: number) => {
  const formatedPrice = price / 100;
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(formatedPrice);
};
