"use client";
import React, { useEffect, useState } from "react";
import Fotoraf from "./Fotoraf";
import FotorafPagination from "./FotorafPagination";

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
        const sortedData = data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        setImages(sortedData.slice((page - 1) * limit, page * limit));
        setTotalPages(Math.ceil(data.length / limit));
      } else {
        console.error('Failed to fetch images');
      }
    };

    fetchImages(currentPage);
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image: any) => (
          <Fotoraf key={image} image={image} />
        ))}
      </div>

      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default FotorafList;
