import * as S from './styles'
type SectionWrapperProps = {
  needShow: boolean
  toastText: string
}

export const Toast = ({ needShow, toastText }: SectionWrapperProps) => {
  return <S.ToastDialog open={needShow}>{toastText}</S.ToastDialog>
}
