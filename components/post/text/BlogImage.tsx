import React, { useCallback, useEffect } from "react";
import Image from "next/image";

interface IBlogImage {
  source: string;
  description: string;
}

const BlogImage = ({ source, description }: IBlogImage) => {
  const [fullscreen, setFullscreen] = React.useState(false);

  const handleFullScreen = () => {
    setFullscreen(!fullscreen);
  };

  const escFunction = useCallback((event: any) => {
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
    <div className="w-full h-max my-2" onClick={() => handleFullScreen()}>
      {fullscreen ? (
        <div className="fixed top-0 left-0 w-full h-full bg-dark bg-opacity-90 z-50 flex justify-center items-center">
          <Image
            src={source}
            alt={description}
            sizes="100vw"
            style={{
              width: "90%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
        </div>
      ) : (
        <div className="relative w-full h-max flex justify-center hover:cursor-pointer">
          <Image
            src={source}
            alt={description}
            sizes="100vw"
            style={{
              width: "90%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
        </div>
      )}
    </div>
  );
};

export default BlogImage;
