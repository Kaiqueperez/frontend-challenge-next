import Button from "../Button";

import * as S from "./styles";

type FilterProps = {
  setFilterParam: (filter: string) => void;
};

export const Filters = ({ setFilterParam }: FilterProps) => {
  return (
    <S.FilterWrapper>
      <div className="wrapper-filter-content">
        <div className="filterContent">
          <Button
            text={"Todos os produtos"}
            value={"allProducts"}
            onClick={(e) => setFilterParam(e.currentTarget.value)}
          />
        </div>
        <div className="filterContent">
          <Button
            text={"Camisetas"}
            value="Camiseta"
            onClick={(e) => setFilterParam(e.currentTarget.value)}
          />
        </div>
        <div className="filterContent">
          <Button
            text={"Canecas"}
            value="Caneca"
            onClick={(e) => setFilterParam(e.currentTarget.value)}
          />
        </div>
      </div>

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
