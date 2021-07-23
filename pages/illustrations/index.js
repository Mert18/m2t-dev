import React from "react";
import classes from "./ills.module.css";
import Illustration from "../../components/Illustration";
import Head from "next/head";

const Illustrations = () => {
  return (
    <section className={classes.illustrations}>
      <Head>
        <title>Illustrations</title>
        <meta name="description" content="Adobe Illustrator artworks." />
      </Head>
      <main className={classes.content}>
        <section className={classes.ills}>
          <div id={classes.kindred}>
            <Illustration
              img="/images/illustrations/kindred.svg"
              title="Kindred"
              date="5/27/2021"
            />
          </div>
          <div id={classes.capsule}>
            <Illustration
              img="/images/illustrations/capsule.svg"
              title="Capsule"
              date="6/24/2021"
            />
          </div>
          <div id={classes.redsc}>
            <Illustration
              img="/images/illustrations/red-scene.svg"
              title="Scene Red"
              date="5/27/2021"
            />
          </div>
        </section>
      </main>
    </section>
  );
};

export default Illustrations;
