interface ImageComponentProps extends React.ComponentProps<"img"> {}

export const ImageComponent = ({ ...props }: ImageComponentProps) => {
  return <img {...props}></img>;
};
