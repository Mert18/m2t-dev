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

  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "intro intro intro intro tools tools"
    "intro intro intro intro tools tools"
    "tech tech tech tech tools tools";
  & > div {
    padding: 1rem;
  }

  @media (max-width: 1100px) {
    grid-template-areas:
      "intro intro intro intro intro intro"
      "tools tools tools tools tools tools"
      "tech tech tech tech tech tech";
  }
`;
const Introduction = styled.div`
  grid-area: intro;
`;
const Technologies = styled.div`
  grid-area: tech;
`;
const Tools = styled.div`
  grid-area: tools;
`;

const AreaTitle = styled.h2`
  font-size: 2rem;
  color: var(--tertiary);
  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }
`;

const AreaPara = styled.p`
  font-size: 1.3rem;

  @media (max-width: 1100px) {
    font-size: 1rem;
  }
`;

const AreaList = styled.ul<{ tech: boolean }>`
  padding: 0rem;

  ${(props) =>
    props.tech &&
    `
      display: flex;
`}
`;

const AreaListItem = styled.li`
  margin-right: 1rem;
  font-size: 1.2rem;

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
      </ResumeWrapper>
    </Layout>
  );
};

export default Me;
