"use client";
import React, { useEffect, useState } from "react";
import Fotoraf from "./Fotoraf";
import FotorafPagination from "./FotorafPagination";

const FotorafList = () => {
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const callAPI = async () => {
    const res = await fetch(
      `https://${
        process.env.NEXT_PUBLIC_API_URL || ""
      }/api/v1/stored-image/list?page=${currentPage}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    setImages(data?.content);
    setTotalPages(data?.totalPages);
  };

  useEffect(() => {
    callAPI();
  }, [currentPage]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image: any) => (
          <Fotoraf key={image.uploadedAt} image={image} />
        ))}
      </div>

      <FotorafPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default FotorafList;
