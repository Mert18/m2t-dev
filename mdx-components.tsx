"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import Prompt from "./components/ai-talks/Prompt";
import AIResponse from "./components/ai-talks/AIResponse";

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={{ Prompt, AIResponse }} />;
}
