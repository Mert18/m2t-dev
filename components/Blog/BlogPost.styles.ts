import styled from "styled-components";

export const BlogPostCard = styled.article`
  @media (max-width: 800px) {
    line-height: 20px;
    padding: 0.3rem;
  }
  &:hover {
    transition: all 0.3s ease;
    color: var(--tertiary);
    background: var(--flavor);
  }
`;

export const PostLink = styled.a`
  display: block;
  min-width: 100%;
  min-height: 19vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1.5rem;
`;

export const PostTitle = styled.h3`
  font-weight: 400;
  transition: all 0.3s ease;
  font-size: 1.5rem;
  color: var(--tertiary);
`;

export const PostDate = styled.p`
  font-size: 1rem;
  color: var(--secondary);
`;
