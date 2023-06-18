import { useMDXComponent } from "next-contentlayer/hooks";

const components = {};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code, components);
  return <Component components={components} />;
}
