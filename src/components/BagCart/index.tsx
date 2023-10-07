import { ForwardRefRenderFunction, forwardRef } from "react";
import { ImageComponent } from "../ImageComponent";
import * as S from "./styles";

type BagCartProps = React.ComponentProps<"button"> & {
  itensCart?: number;
};
const BagCart: ForwardRefRenderFunction<HTMLButtonElement, BagCartProps> = (
  { ...props }: BagCartProps,
  ref
) => {
  return (
    <S.Bag {...props} ref={ref}>
      <ImageComponent src="Group.svg" />
      <S.Counter>{props.itensCart}</S.Counter>
    </S.Bag>
  );
};

export default forwardRef(BagCart);
