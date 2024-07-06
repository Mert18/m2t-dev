"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface ImageData {
  desc: string;
  date: string;
  url: string;
}

const FotorafShowcase = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const limit = 7; // Number of images per page

  useEffect(() => {
    const fetchImages = async (page: number) => {
      const res = await fetch(`/api/images`);
      if (res.ok) {
        const data: ImageData[] = await res.json();
        const sortedData = data.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        setImages(sortedData.slice((page - 1) * limit, page * limit));
      } else {
        console.error("Failed to fetch images");
      }
    };

    fetchImages(1);
  }, []);

  return (
    <div className="my-2">
      <div className="flex overflow-x-scroll whitespace-nowrap custom-mr">
        {images.map((image) => (
          <div key={image.url} className="flex-none w-72 h-96 relative select-none pointer-events-none">
            <Image
              src={image.url}
              alt={`Image from ${image.date}`}
              width={300}
              height={500}
              loading="lazy"
              className="w-full h-full object-cover rounded-md border border-secondary select-none pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FotorafShowcase;
