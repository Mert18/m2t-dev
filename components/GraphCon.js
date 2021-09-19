import React from "react";
import classes from "./styles/graphcon.module.css";
import dynamic from "next/dynamic";

function Hero() {
  const MyChart = dynamic(() => import("./Graph.js"), { ssr: false });
  return (
    <section className={classes.graphcon}>
      <article className={classes.graphcon__graph}>
        <MyChart />
      </article>
    </section>
  );
}

export default Hero;
