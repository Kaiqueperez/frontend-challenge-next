import Button from "../Button";
import { ImageComponent } from "../ImageComponent";
import * as S from "./styles";

type BagCartProps = {
  itensCart?: number;
};
export const BagCart = ({ ...props }: BagCartProps) => {
  return (
    <Button>
      <ImageComponent src="Group.svg" />
      <S.Counter>{props.itensCart}</S.Counter>
    </Button>
  );
};
