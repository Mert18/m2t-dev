"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import Prompt from "./components/ai-talks/Prompt";

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={{ Prompt }} />;
}
