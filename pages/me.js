import Container from "../components/Container";
import classes from "../styles/me.module.css";

const technologies = [
  "HTML",
  "CSS",
  "React.js",
  "Next.js",
  "MongoDB",
  "PostgreSQL",
  "Typescript",
  "GraphQL",
];

const tools = ["Git", "Atlassian", "Figma", "Webpack", "Adobe Illustrator"];

export default function Me() {
  return (
    <Container>
      <div className={classes.resume}>
        <div className={classes.resumecontent}>
          <div className={classes.textpart}>
            <p className={classes.textparttitle}>Introduction</p>
            <p>
              Frontend Developer with 2 years experience building responsive
              websites. Proficient in HTML, CSS, Javascript, modern technologies
              such as React.js, Next.js and Node.js.{" "}
            </p>
            <p>
              Currently learning Typescript and GraphQL. Planning to learn PHP
              in the near future.
            </p>
            <p>
              I mostly use MongoDB as database in my projects, I have also a bit
              knowledge on SQL databases, have used PostgreSQL in a small
              project before.
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
