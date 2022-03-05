import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.h2`
  color: var(--tertiary);
  font-size: 1.2rem;
  font-weight: 400;
  &:before {
    content: "🐤 |";
    font-size: 1.6rem;
    margin-right: 1rem;
  }
`;

const SectionHeader = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default SectionHeader;
