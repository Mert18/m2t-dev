import styled from "styled-components";

export const FooterWrapper = styled.footer`
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary);

  & > div > a {
    text-decoration: none;
    color: var(--secondary);
    transition: all 0.3s ease;

    &:hover {
      color: var(--tertiary);
      transition: all 0.3s ease;
    }
  }
`;
