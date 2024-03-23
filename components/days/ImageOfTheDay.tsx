import Image from "next/image";
import React, { useState } from "react";

const ImageOfTheDay = ({ image }: any) => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div
      key={image.uploadedAt}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full"
    >
      <Image
        src={image.url}
        alt="Alive proof"
        width={500}
        height={500}
        style={{
          width: "100%",
          height: "auto"
        }}
      />
      {hover && (
        <div className="flex justify-center items-center p-4 bg-black bg-opacity-60 absolute bottom-0 left-0 w-full text-white">
          <p>{image.date}</p>
        </div>
      )}
    </div>
  );
};

export default ImageOfTheDay;
