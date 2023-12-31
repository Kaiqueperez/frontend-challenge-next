import { Filter } from "./Filter";

import * as S from "./styles";

type FilterProps = {
  setFilterParam: (filter: string) => void;
};

const filterValues = {
  allProducts: "Todos os produtos",
  tShirts: "Camisetas",
  mug: "Canecas",
};

export const Filters = ({ setFilterParam }: FilterProps) => {
  return (
    <S.FilterWrapper>
      <S.WrapperFilterContent>
        <Filter
          text={filterValues.allProducts}
          value="allProducts"
          onClick={(e) => setFilterParam(e.currentTarget.value)}
        />
        <Filter
          text={filterValues.tShirts}
          value="Camiseta"
          onClick={(e) => setFilterParam(e.currentTarget.value)}
        />
        <Filter
          text={filterValues.mug}
          value="Caneca"
          onClick={(e) => setFilterParam(e.currentTarget.value)}
        />
      </S.WrapperFilterContent>

      <select
        name=""
        id=""
        onClick={(e) => setFilterParam(e.currentTarget.value)}
      >
        <option value="">Organize por: </option>
        <option value="">Novidades</option>
        <option value="highToLow">Preço: Maior - menor</option>
        <option value="">Preço: Menor - maior</option>
        <option value="">Mais vendidos</option>
      </select>
    </S.FilterWrapper>
  );
};
