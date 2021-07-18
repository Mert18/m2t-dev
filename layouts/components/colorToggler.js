import React, { useContext } from "react";
import { ColorContext } from "../../lib/context";
import classes from "../styles/default.module.css";

const colorToggler = () => {
  const { color, setColor } = useContext(ColorContext);

  return (
    <>
      <button
        className={classes.y}
        onClick={(e) => {
          e.preventDefault(), setColor("first");
        }}
      ></button>
      <button
        className={classes.g}
        onClick={(e) => {
          e.preventDefault(), setColor("second");
        }}
      ></button>
      <button
        className={classes.v}
        onClick={(e) => {
          e.preventDefault(), setColor("third");
        }}
      ></button>
      <button
        className={classes.s}
        onClick={(e) => {
          e.preventDefault(), setColor("sarcoline");
        }}
      ></button>
      <button
        className={classes.r}
        onClick={(e) => {
          e.preventDefault(), setColor("viridian");
        }}
      ></button>
    </>
  );
};

export default colorToggler;
