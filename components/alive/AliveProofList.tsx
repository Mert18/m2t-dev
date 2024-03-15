"use client";
import React, { useEffect, useState } from "react";
import ImageOfTheDay from "./ImageOfTheDay";
import Loader from "../Loader";
import AliveProofPagination from "./AliveProofPagination";

const AliveProofList = () => {
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [daysFromMyLastAliveProof, setDaysFromMyLastAliveProof] = useState(0);
  const [aliveStatus, setAliveStatus] = useState("");

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

  useEffect(() => {
    if (currentPage === 0 && images.length > 0) {
      const latestImageDate = new Date((images[0] as any).date);
      const differenceInTime = new Date().getTime() - latestImageDate.getTime();
      const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

      setDaysFromMyLastAliveProof(differenceInDays);
    }
  }, [images, currentPage]);

  useEffect(() => {
    switch (daysFromMyLastAliveProof) {
      case 0:
        setAliveStatus("I have uploaded a photo today I am most likely alive!");
        break;
      case 1:
        setAliveStatus(
          "I have uploaded a photo yesterday I am probably alive!"
        );
        break;
      case 2:
        setAliveStatus(
          "I have uploaded a photo 2 days ago I may not be alive."
        );
        break;
      case 3:
        setAliveStatus(
          "I have uploaded a photo 3 days ago I am probably not alive :("
        );
        break;
      case 4:
        setAliveStatus(
          "I have uploaded a photo more than 3 days ago I may not be alive :("
        );
        break;
      default:
        setAliveStatus(
          "I have not uploaded a photo in a long time I am most likely not alive :("
        );
        break;
    }
  }, [daysFromMyLastAliveProof]);

  return (
    <div>
      {images.length !== 0 && (
        <div className="flex justify-center items-center my-4">
          <p>{aliveStatus}</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading ? (
          <Loader />
        ) : (
          images.map((image: any) => (
            <ImageOfTheDay key={image.uploadedAt} image={image} />
          ))
        )}
      </div>

      <AliveProofPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default AliveProofList;
