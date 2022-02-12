import Container from "../components/Container";
import classes from "../styles/me.module.css";

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

export default function Me() {
  return (
    <Container title="About - Mert Uygur" description="About Mert Uygur">
      <div className={classes.resume}>
        <div className={classes.resumecontent}>
          <div className={classes.textpart}>
            <p className={classes.textparttitle}>Introduction</p>
            <p>
              Software Engineer with 2.5 years experience building responsive
              websites and systems. Proficient in HTML, CSS, Javascript, modern
              technologies such as React.js, Next.js, Node.js, and Typescript.
            </p>
          </div>
          <div className={classes.textpart}>
            <p className={classes.textparttitle}>Technologies</p>

            <ul className={classes.techlist}>
              {technologies.map((tech) => {
                return <li key={tech}>{tech}</li>;
              })}
            </ul>
          </div>

          <div className={classes.textpart}>
            <p className={classes.textparttitle}>Tools</p>

            <ul className={classes.techlist}>
              {tools.map((tools) => {
                return <li key={tools}>{tools}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
