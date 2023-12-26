import Link from "next/link";
import Button from "../Button";
import { ImageComponent } from "../ImageComponent";
import * as S from "./styles";

type BagCartProps = {
  itensCart?: number;
};
export const BagCart = ({ itensCart }: BagCartProps) => {
  return (
    <Button>
      <Link href={"/checkout/cart"}>
        <ImageComponent src="Group.svg" />
        <S.Counter>{itensCart}</S.Counter>
      </Link>
    </Button>
  );
};
