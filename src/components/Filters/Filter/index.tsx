import Button from "@/components/Button";
import { MouseEventHandler } from "react";
import * as S from "./styles";

type FilterProps = {
  text: string;
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
};
export const Filter = ({ onClick, value, text }: FilterProps) => {
  return (
    <S.FilterContent>
      <Button text={text} value={value} onClick={onClick} />
    </S.FilterContent>
  );
};
