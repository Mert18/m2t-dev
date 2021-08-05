import React from "react";
import classes from "./styles/tech.module.css";
const Tech = ({ name, rank }) => {
  const customLow = {
    backgroundColor: "red",
    width: `${rank}%`,
    height: ".5vh",
  };
  const customMed = {
    backgroundColor: "orange",
    width: `${rank}%`,
    height: ".5vh",
  };
  const customHigh = {
    backgroundColor: "green",
    width: `${rank}%`,
    height: ".5vh",
  };
  let style = customLow;

  if (rank <= 33 && rank > 0) {
    style = customLow;
  } else if (rank > 33 && rank <= 66) {
    style = customMed;
  } else if (rank > 66 && rank <= 100) {
    style = customHigh;
  }
  return (
    <div className={classes.tech}>
      <p>{name}</p>
      <div ıd="bottom" style={style}></div>
    </div>
  );
};

export default Tech;
