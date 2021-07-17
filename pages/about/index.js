import classes from "./about.module.css";
import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <section className={classes.about}>
      <Head>
        <title>About a web developer</title>
        <meta
          name="description"
          content="Important things about a web developer."
        />
      </Head>
      <main className={classes.content}>
        <header className={classes.hero}>
          <div className={classes.hero__prof}>
            <Image src="/images/assets/prof.jpg" width="250px" height="250px" />
          </div>

          <div className={classes.hero__text}>
            <p>Computer Engineering Student</p>
            <p>Frontend Developer</p>
          </div>
        </header>

        <main className={classes.aboutstack}>
          <p>I know those and have used them in a project before.</p>
          <div className={classes.aboutstack__stack}>
            <div
              className={classes.tech}
              id={classes.sasstool}
              className={classes.tooltip}
            >
              <img src="/images/icons/sass.svg" width="60px" alt="sass icon" />
            </div>
            <div
              className={classes.tech}
              id={classes.jstool}
              className={classes.tooltip}
            >
              <img src="/images/icons/js.svg" width="60px" alt="js icon" />
            </div>
            <div
              className={classes.tech}
              id={classes.reacttool}
              className={classes.tooltip}
            >
              <img
                src="/images/icons/react.svg"
                width="60px"
                alt="react icon"
              />
            </div>
            <div
              className={classes.tech}
              id={classes.nextjstool}
              className={classes.tooltip}
            >
              <img
                src="/images/icons/next-js.svg"
                width="60px"
                alt="nextjs icon"
              />
            </div>
            <div
              className={classes.tech}
              id={classes.nodejstool}
              className={classes.tooltip}
            >
              <img
                src="/images/icons/node-js.svg"
                width="60px"
                alt="nodejs icon"
              />
            </div>
            <div
              className={classes.tech}
              id={classes.mongodbtool}
              className={classes.tooltip}
            >
              <img
                src="/images/icons/mongodb.svg"
                width="60px"
                alt="mongodb icon"
              />
            </div>
            <div
              className={classes.tech}
              id={classes.gittool}
              className={classes.tooltip}
            >
              <img src="/images/icons/git.svg" width="60px" alt="git icon" />
            </div>
          </div>

          <p>I'm still learning the following.</p>

          <div className={classes.aboutstack__stack}>
            <div
              className={classes.tech}
              id={classes.postgrestool}
              className={classes.tooltip}
            >
              <img
                src="/images/icons/postgresql.svg"
                width="60px"
                alt="postgresql icon"
              />
            </div>

            <div
              className={classes.tech}
              id={classes.linuxtool}
              className={classes.tooltip}
            >
              <img
                src="/images/icons/linux-tux.svg"
                width="60px"
                alt="linux icon"
              />
            </div>

            <div
              className={classes.tech}
              id={classes.typetool}
              className={classes.tooltip}
            >
              <img
                src="/images/icons/typescript.svg"
                width="60px"
                alt="typescript icon"
              />
            </div>

            <div
              className={classes.tech}
              id={classes.awstool}
              className={classes.tooltip}
            >
              <img src="/images/icons/aws.svg" width="60px" alt="aws icon" />
            </div>
          </div>

          <p>I'm planning to learn in the near future.</p>

          <div className={classes.aboutstack__stack}>
            <div
              className={classes.tech}
              id={classes.phptool}
              className={classes.tooltip}
            >
              <img
                src="/images/icons/php.svg"
                width="60px"
                alt="postgresql icon"
              />
            </div>

            <div
              className={classes.tech}
              id={classes.graphtool}
              className={classes.tooltip}
            >
              <img
                src="/images/icons/graphql.svg"
                width="60px"
                alt="mongodb icon"
              />
            </div>
          </div>

          <div className={classes.really}>
            <p>I was born in the southernmost city in Turkey, Hatay.</p>
            <br />
            <p>
              In 2018, I started studying Computer Engineering in Gazi
              University.{" "}
            </p>
            <br />
            <p>
              In May 2020, I had a chance to dive into web technologies, so I
              did.
            </p>
            <br />
            <p>
              From this point, I've been learning and making projects in web
              development area.
            </p>
            <br />
          </div>
        </main>
      </main>
    </section>
  );
};

export default About;
