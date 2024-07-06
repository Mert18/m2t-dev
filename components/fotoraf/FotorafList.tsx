"use client";
import React, { useEffect, useState } from "react";
import Fotoraf from "./Fotoraf";

interface ImageData {
  desc: string;
  date: string;
  url: string;
}

const FotorafList = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10; // Number of images per page

  useEffect(() => {
    const fetchImages = async (page: number) => {
      const res = await fetch(`/api/images`);
      if (res.ok) {
        const data: ImageData[] = await res.json();
        const sortedData = data.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        setImages(sortedData.slice((page - 1) * limit, page * limit));
        setTotalPages(Math.ceil(data.length / limit));
      } else {
        console.error("Failed to fetch images");
      }
    };

    fetchImages(currentPage);
  }, [currentPage]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 m-1">
        {images.map((image: any) => (
          <Fotoraf key={image.url} image={image} />
        ))}
      </div>

      <div className="flex justify-center">
        {totalPages > 1 && (
          <ul className="flex">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page}>
                <button
                  onClick={() => setCurrentPage(page)}
                  disabled={page === currentPage}
                  className={`${
                    page === currentPage
                      ? "bg-secondary text-background"
                      : "bg-primary"
                  } px-3 py-1 m-1 w-9 h-9 rounded-md border border-secondary text-secondary hover:bg-secondary hover:text-primary`}
                >
                  {page}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FotorafList;
