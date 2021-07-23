import React from "react";
import classes from "./styles/illustration.module.css";
import Image from "next/image";

const Illustration = ({ img, title, date }) => {
  return (
    <figure className={classes.figure}>
      <Image
        placeholder="blur"
        src={img}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
      {/* <figcaption className="caption">
        {title} , {date}
      </figcaption> */}
    </figure>
  );
};

export default Illustration;
