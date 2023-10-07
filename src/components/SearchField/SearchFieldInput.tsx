import { ForwardRefRenderFunction, forwardRef } from "react";
import { ImageComponent } from "../ImageComponent";
import * as S from "./styles";
type SearchFieldInputProps = React.ComponentProps<"input"> & {
  icon?: string;
};

const SearchFieldInput: ForwardRefRenderFunction<
  HTMLInputElement,
  SearchFieldInputProps
> = ({ ...props }: SearchFieldInputProps, forwardRef) => {
  return (
    <S.WrapperSearchInput>
      <S.InputField {...props} ref={forwardRef} />
      {props.icon && <ImageComponent src={props.icon} />}
    </S.WrapperSearchInput>
  );
};

export default forwardRef(SearchFieldInput);
