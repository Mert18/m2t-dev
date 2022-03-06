import styled from "styled-components";

export const HeaderWrapper = styled.header`
  font-weight: 400;
  min-height: 40vh;
  display: grid;
  grid-template-columns: minmax(0vh, 5vh) auto minmax(0, 5vh);
  grid-template-rows: 2vh auto auto 2vh;
  grid-template-areas:
    ". . ."
    "upper upper upper"
    "lower lower lower"
    ". . .";
  background: var(--primary);
`;

export const HeaderUpper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: upper;
  font-family: "Righteous", cursive;
`;

export const HeaderUpperOptions = styled.ul<{ right: boolean }>`
  padding: 0rem;
  margin-left: 3rem;
  & > li {
    margin-top: 0.4rem;
    & > a {
      color: var(--secondary);
      &:hover {
        color: var(--tertiary);
        transition: all 0.3s;
      }
    }

    & > button {
      transition: all 0.3s;
      border: none;
      outline: none;
      background: transparent;
      color: var(--secondary);
      font-size: 1.1rem;
      padding: 0;
      font-family: "Righteous", cursive;
      &:hover {
        color: var(--tertiary);
        transition: all 0.3s;
        cursor: pointer;
      }
    }
  }

  ${(props) =>
    props.right &&
    `
    margin-left: 0rem;
  margin-right: 3rem;

    display: flex;
  flex-direction: column;
    align-items: flex-end; 
`}
`;

export const HeaderUpperOptionsTitle = styled.li`
  color: var(--tertiary);
  font-weight: 600;
`;

export const HeaderUpperMain = styled.div`
  position: relative;

  & > h1 {
    font-size: 6rem;
    color: var(--secondary);
  }

  & > p {
    position: absolute;
    bottom: 12%;
    right: 0%;
    padding: 0.7rem;
    font-size: 1.1rem;
    font-weight: 700;
    background: var(--tertiary);
    color: var(--secondary);
  }
`;

export const HeaderLower = styled.div`
  grid-area: lower;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--secondary);

  & > ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    & > li {
      margin-right: 4rem;
      font-size: 1.1rem;
      & > a {
        transition: all 0.3s ease;
        &:hover {
          color: var(--tertiary);
          transition: all 0.3s ease;
        }
      }
      &:last-child {
        margin-right: 0rem;
      }
    }
  }
`;

export const Sticky = styled.div`
  grid-area: lower;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--secondary);
  background: var(--primary);
  z-index: 9999;
  height: 10vh;
  position: fixed;
  top: 0;
  width: 100%;
  transition: 0.3s all ease;
  border-bottom: 4px solid var(--tertiary);

  & > ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    & > li {
      margin-right: 4rem;
      font-size: 1.1rem;

      & > a {
        transition: all 0.3s ease;
        &:hover {
          color: var(--tertiary);
          transition: all 0.3s ease;
        }
      }

      &:last-child {
        margin-right: 0rem;
      }
    }
  }
`;

export const MobileHeader = styled.header`
  display: grid;
  grid-template-columns: minmax(0vh, 10vh) auto minmax(0, 10vh);
  grid-template-rows: 2vh auto auto 4vh;
  grid-template-areas:
    ". . ."
    ". upper ."
    ". lower ."
    ". . .";
  position: relative;
  background: var(--primary);
  color: var(--secondary);
`;

export const MobileHeaderMain = styled.div`
  position: relative;
  grid-area: upper;
  justify-self: center;

  & > h1 {
    font-size: 4rem;
  }

  & > p {
    position: absolute;
    bottom: 5%;
    right: -20%;
    padding: 0.4rem;
    font-size: 1rem;
    font-weight: 700;
    background: var(--tertiary);
    color: var(--secondary);
  }
`;

export const MobileHeaderIcon = styled.div`
  & > div {
    position: absolute;
    top: 8%;
    left: 4%;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background: var(--tertiary);
  }
`;

export const MobileMenu = styled.ul`
  backdrop-filter: blur(2px);
  list-style: none;
  padding: 0rem;
  position: absolute;
  top: 80%;
  left: 0;
  width: 96vw;
  font-weight: 400;
  z-index: 999;

  & > li {
    height: 13vh;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    & > a {
      display: block;
      min-width: 100%;
      min-height: 100%;
      text-align: center;
      padding-top: 2rm;
    }
  }
`;
