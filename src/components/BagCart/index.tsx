import Button from "../Button";
import { ImageComponent } from "../ImageComponent";
import * as S from "./styles";

type BagCartProps = {
  itensCart?: number;
};
export const BagCart = ({ itensCart }: BagCartProps) => {
  return (
    <Button>
      <ImageComponent src="Group.svg" />
      <S.Counter>{itensCart}</S.Counter>
    </Button>
  );
};
