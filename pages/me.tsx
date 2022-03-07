import Layout from "../components/Layout";
import styled from "styled-components";

const technologies = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React.js",
  "Next.js",
  "MongoDB",
];

const tools = ["Git", "Jira", "Figma", "Adobe Illustrator", "Linux"];

const ResumeWrapper = styled.div`
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

const ResumeLeft = styled.div`
  grid-area: left;
  padding: 1rem;
`;

const ResumeRight = styled.div`
  grid-area: right;
`;

const Introduction = styled.div`
`;
const Technologies = styled.div`
`;
const Tools = styled.div`
`;

const AreaTitle = styled.h2`
  color: var(--tertiary);
`;

const AreaPara = styled.p`

`;

const AreaList = styled.ul<{ tech: boolean }>`
  padding: 0rem;
  display: flex;

  ${(props) =>
    props.tech &&
    `
      display: flex;
`}
`;

const AreaListItem = styled.li`
  margin-right: 1rem;

  @media (max-width: 1100px) {
    font-size: 1rem;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const Me = () => {
  return (
    <Layout title="About - Mert Uygur" description="About Mert Uygur">
      <ResumeWrapper>
        <ResumeLeft>
          <Introduction>
            <AreaTitle>Introduction</AreaTitle>
            <AreaPara>
              Software Engineer with 2.5 years experience building responsive
              websites and systems. Proficient in HTML, CSS, Javascript, modern
              technologies such as React.js, Next.js, Node.js, and Typescript.
            </AreaPara>
          </Introduction>
          <Technologies>
            <AreaTitle>Technologies</AreaTitle>

            <AreaList tech={true}>
              {technologies.map((tech) => {
                return <AreaListItem key={tech}>{tech}</AreaListItem>;
              })}
            </AreaList>
          </Technologies>
          <Tools>
            <AreaTitle>Tools</AreaTitle>

            <AreaList tech={false}>
              {tools.map((tools) => {
                return <AreaListItem key={tools}>{tools}</AreaListItem>;
              })}
            </AreaList>
          </Tools>
        </ResumeLeft>

        <ResumeRight></ResumeRight>
      </ResumeWrapper>
    </Layout>
  );
};

export default Me;
