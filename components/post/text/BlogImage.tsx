import React, { useCallback, useEffect } from "react";
import Image from "next/image";

interface IBlogImage {
  source: string;
  description: string;
}

const BlogImage = ({ source, description }: IBlogImage) => {
  const [fullscreen, setFullscreen] = React.useState(false);

  const toggleFullScreen = () => {
    setFullscreen(prev => !prev);
  };

  const escFunction = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setFullscreen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return (
    <div className="w-full h-max my-2" onClick={toggleFullScreen} aria-label="Toggle fullscreen image">
      {fullscreen ? (
        <div className="fixed top-0 left-0 w-full h-full border border-secondary bg-gray bg-opacity-90 z-50 flex justify-center items-center overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={source}
              alt={description}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      ) : (
        <div className="relative w-full h-max flex flex-col justify-center hover:cursor-pointer">
          <Image
            src={source}
            alt={description}
            layout="responsive"
            width={500}
            height={300}
            objectFit="contain"
          />
          <p className="text-accent opacity-60 text-xs">{description}</p>
        </div>
      )}
    </div>
  );
};

export default BlogImage;