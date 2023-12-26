export const urlParamsSliced = (paramns?: string) =>
  paramns ? Number(paramns?.split("price")[1]?.slice(3, 7)) : 0;
