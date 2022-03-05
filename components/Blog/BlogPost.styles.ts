import styled from "styled-components";

export const BlogPostCard = styled.article`
  margin: 2rem 0rem;

  @media (max-width: 800px) {
    line-height: 20px;
    padding: 0.3rem;
  }
`;

export const PostTitle = styled.h3`
  font-weight: 400;
  transition: all 0.3s ease;
  font-size: 1rem;
  color: var(--secondary);

  &:hover {
    transition: all 0.3s ease;
    color: var(--tertiary);
  }
`;

export const PostDate = styled.p`
  font-size: 1rem;
  color: var(--tertiary);
`;
