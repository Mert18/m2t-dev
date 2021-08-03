import React from "react";
import GraphCon from "../../components/GraphCon";
import Spotify from "../../components/spotify";
import Head from "next/head";
import classes from "./tmi.module.css";

function tmi() {
  return (
    <section className={classes.tmi}>
      <Head>
        <title>Too Much Information</title>
        <meta name="description" content="Too much info about me." />
      </Head>
      <main className={classes.content}>
        <GraphCon />
        <Spotify />
      </main>
    </section>
  );
}

export default tmi;
