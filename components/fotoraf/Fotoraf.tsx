import Image from "next/image";
import React, { useState } from "react";

const Fotoraf = ({ image }: any) => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div
      key={image}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full"
    >
      <Image
        src={image.url}
        alt={`Image from ${image.date}`}
        width={500}
        height={500}
        style={{
          width: "100%",
          height: "auto"
        }}
        loading="lazy"
      />
    </div>
  );
};

export default Fotoraf;
