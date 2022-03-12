import styled from "styled-components";

export const ResumeWrapper = styled.div`
  color: white;
  background: var(--primary);
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "left right";
  @media (max-width: 1100px) {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "right";
  }
`;

export const ResumeLeft = styled.div`
  grid-area: left;
  padding: 1rem;
`;

export const ResumeRight = styled.div`
  grid-area: right;
`;

export const Introduction = styled.div``;
export const Technologies = styled.div``;
export const Tools = styled.div``;

export const AreaTitle = styled.h2`
  color: var(--tertiary);
`;

export const AreaPara = styled.p``;

export const AreaList = styled.ul<{ tech: boolean }>`
  padding: 0rem;
  display: flex;

  ${(props) =>
    props.tech &&
    `
      display: flex;
`}
`;

export const AreaListItem = styled.li`
  margin-right: 1rem;

  @media (max-width: 1100px) {
    font-size: 1rem;
  }
  &:last-child {
    margin-right: 0;
  }
`;

