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
      className="relative w-full select-none"
    >
      <Image
        src={image.url}
        alt={`Image from ${image.date}`}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={500}
        height={300}
        loading="lazy"
        className="rounded-md border border-secondary select-none pointer-events-none"
      />
      {hover && (
        <div className="absolute inset-0 bg-secondary bg-opacity-25 flex items-center justify-center rounded-md">
          <p className="text-white text-lg">{image.date}</p>
        </div>
      )}
    </div>
  );
};

export default Fotoraf;
