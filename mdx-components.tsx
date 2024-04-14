"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import Prompt from "./components/post/Prompt";
import AIResponse from "./components/post/AIResponse";
import HeaderOne from "./components/post/text/HeaderOne";
import HeaderTwo from "./components/post/text/HeaderTwo";
import HeaderThree from "./components/post/text/HeaderThree";
import Paragraph from "./components/post/text/Paragraph";
import List from "./components/post/text/List";
import BlogImage from "./components/post/text/BlogImage";
import ListItemWithTitle from "./components/post/text/ListItemWithTitle";

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={{ Prompt, AIResponse, HeaderOne, HeaderTwo, HeaderThree, Paragraph, List, BlogImage, ListItemWithTitle }} />;
}
