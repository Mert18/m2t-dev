import Layout from "../components/Layout";
import SectionHeader from "../components/SectionHeader";
import {ResumeLeft, ResumeRight, ResumeWrapper, AreaList, AreaPara, AreaTitle, AreaListItem, Introduction, Technologies, Tools} from "../styles/me.styles"

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


const Me = () => {
  return (
    <Layout title="About - Mert Uygur" description="About Mert Uygur">
      <ResumeWrapper>
        <ResumeLeft>
          <SectionHeader title="About Me" />
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
