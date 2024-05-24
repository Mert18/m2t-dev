import React, { useEffect, useState } from "react";

const FakeLoader = () => {
  const [progress, setProgress] = useState(0);
  const [shownLoaderText, setShownLoaderText] = useState("");
  const [loaderTexts, setLoaderTexts] = useState([
    "Loading the loader...",
    "Checking if you are a human...",
    "Checking if you are a nice person...",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update progress with a random increment
      setProgress((oldProgress) => {
        const randomIncrement = Math.floor(Math.random() * 10) + 1;
        const updatedProgress = oldProgress + randomIncrement;
        return updatedProgress > 99 ? 99 : updatedProgress;
      });
    }, 300); // Update every second

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i !== loaderTexts.length) {
        setShownLoaderText(loaderTexts[i]);
        i++;
      }
    }, 100); // Update every second

    return () => clearInterval(interval);
  }, [loaderTexts]);

  return (
    <div style={{ width: "100%"}} className="w-full flex flex-col justify-center items-center h-full mt-20">
      <p>{shownLoaderText}</p>
      <div
        style={{
          width: `${progress}%`,
          transition: "width .1s ease-in-out",
          height: "36px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#6A8C45",
          color: "#efefef",
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default FakeLoader;
