import Button from "../Button";
import * as S from "./styles";

type PaginationProps = {
  currentPage: number;
  totalOfProducts: number;
  productsPerPage: number;
  setCurrentPage: (value: React.SetStateAction<number>) => void;
};

export const Pagination = ({
  currentPage,
  productsPerPage,
  totalOfProducts,
  setCurrentPage,
}: PaginationProps) => {
  const numberOfPages = Array.from(
    { length: Math.ceil(totalOfProducts / productsPerPage) },
    (_, index) => index + 1
  );

  const changePage = (number: number) => setCurrentPage(number);
  const previousPage = () => setCurrentPage(currentPage - 1);
  const nextPage = () => setCurrentPage(currentPage + 1);

  return (
    <S.WrapperPaginationButtons>
      <S.WrapperNumberedButtons>
        {numberOfPages.map((number: number) => (
          <Button key={number} onClick={() => changePage(number)}>
            {number}
          </Button>
        ))}
      </S.WrapperNumberedButtons>
      <S.WrapperArrowButtons>
        <Button disabled={currentPage === 1} onClick={previousPage}>
          {" "}
          {"<"}{" "}
        </Button>
        <Button
          disabled={currentPage >= numberOfPages.length}
          onClick={nextPage}
        >
          {" "}
          {">"}
        </Button>
      </S.WrapperArrowButtons>
    </S.WrapperPaginationButtons>
  );
};
