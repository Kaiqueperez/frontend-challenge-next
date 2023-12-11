export const productNameSliced = (productName: string) => {
  return productName.includes("Caneca")
    ? productName.slice(0, 6)
    : productName.slice(0, 8);
};
