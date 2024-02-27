import { ForwardRefRenderFunction, MouseEventHandler, forwardRef } from "react";
import Button from "../Button";
import { ImageComponent } from "../ImageComponent";
import * as S from "./styles";
type SearchFieldInputProps = React.ComponentProps<"input"> & {
  icon?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

const SearchFieldInput: ForwardRefRenderFunction<
  HTMLInputElement,
  SearchFieldInputProps
> = ({ ...props }: SearchFieldInputProps, forwardRef) => {
  return (
    <S.WrapperSearchInput>
      <S.InputField {...props} ref={forwardRef} />
      {props.icon && (
        <Button onClick={props.onClick}>
          <ImageComponent src={props.icon} />
        </Button>
      )}
    </S.WrapperSearchInput>
  );
};

export default forwardRef(SearchFieldInput);
