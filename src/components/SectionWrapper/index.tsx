import * as S from "./styles";
type SectionWrapperProps = {
  children: React.ReactNode;
};

export const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return <S.Section>{children}</S.Section>;
};
