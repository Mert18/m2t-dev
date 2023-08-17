import NextImage, { ImageProps } from "next/image";

function Image(props: ImageProps) {
  return <NextImage {...props} />;
}

export default Image;
