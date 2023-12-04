import { ForwardRefRenderFunction, forwardRef } from "react";
import * as S from "./styles";

type ButtonProps = React.ComponentProps<"button"> & {
  itensCart?: number;
  children?: React.ReactNode;
  text?: string;
};
const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { ...props }: ButtonProps,
  ref
) => {
  return (
    <S.Button {...props} ref={ref}>
      {props.children}
      {props.text}
    </S.Button>
  );
};

export default forwardRef(Button);
