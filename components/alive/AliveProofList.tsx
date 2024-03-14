"use client";
import React, { useEffect, useState } from "react";
import ImageOfTheDay from "./ImageOfTheDay";
import Loader from "../Loader";
import AliveProofPagination from "./AliveProofPagination";

const AliveProofList = () => {
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const [loading, setLoading] = useState(false);

  const callAPI = async () => {
    setLoading(true);
    console.log("Current page: ", currentPage);
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
          <Loader />
        ) : (
          images.map((image: any) => (
            <ImageOfTheDay key={image.uploadedAt} image={image} />
          ))
        )}
      </div>

        <AliveProofPagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </div>
  );
};

export default AliveProofList;
