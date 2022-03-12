import styled from "styled-components";

export const BlogPageWrapper = styled.div`
  min-height: 70vh;
  margin-top: -3rem;
  background: var(--primary);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "left posts";

  @media(max-width: 1100px){
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: "left" "posts";
  }
`;

export const Left = styled.div`
  grid-area: left;
`

export const Posts = styled.div`
  grid-area: posts;
  margin-top: 2rem;
`

