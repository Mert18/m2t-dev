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
  const limit = 10; // Number of images per page

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      (scrollContainer as any).isDown = true;
      (scrollContainer as any).startX = e.pageX - scrollContainer.offsetLeft;
      (scrollContainer as any).scrollLeft = scrollContainer.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      (scrollContainer as any).isDown = false;
    }
  };

  const handleMouseUp = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      (scrollContainer as any).isDown = false;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer && (scrollContainer as any).isDown) {
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - (scrollContainer as any).startX) * 2; // Scroll speed
      scrollContainer.scrollLeft = (scrollContainer as any).scrollLeft - walk;
    }
  };

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

  useEffect(() => {
    console.log("imgs. ", images);
  }, [images]);
  return (
    <div className="my-2">
      <div
        className="flex overflow-hidden whitespace-nowrap cursor-grab select-none"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {images.map((image) => (
          <div key={image.url} className="flex-none w-72 h-96 mr-2 relative">
            <Image
              src={image.url}
              alt={`Image from ${image.date}`}
              width={300}
              height={500}
              loading="lazy"
              className="w-full h-full object-cover pointer-events-none select-none rounded-md border border-secondary"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FotorafShowcase;
