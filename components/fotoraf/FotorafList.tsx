"use client";
import React, { useEffect, useState } from "react";
import Fotoraf from "./Fotoraf";
import Loader from "../Loader";
import FotorafPagination from "./FotorafPagination";
import FakeLoader from "../FakeLoader";

const FotorafList = () => {
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const callAPI = async () => {
    setLoading(true);
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
    setLoading(false);
  };

  useEffect(() => {
    callAPI();
  }, [currentPage]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading ? (
          <FakeLoader />
        ) : (
          images.map((image: any) => (
            <Fotoraf key={image.uploadedAt} image={image} />
          ))
        )}
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
