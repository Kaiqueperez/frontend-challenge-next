import Link from "next/link";
import Button from "../Button";
import { ImageComponent } from "../ImageComponent";
import * as S from "./styles";

type BagCartProps = {
  itensCart?: number;
  url: string
};
export const BagCart = ({ itensCart, url }: BagCartProps) => {
  return (
    <Button data-testid='button-cart'>
      <Link data-testid='button-link' href={url}>
        <ImageComponent src="Group.svg" />
        <S.Counter>{itensCart}</S.Counter>
      </Link>
    </Button>
  );
};
