import React from "react";

const FotorafPagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: any) => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-5">
    {currentPage !== 0 && (
        <button
        onClick={() => setCurrentPage(currentPage - 1)}
        className="text-dark px-4 py-2 rounded-md"
        >
        Previous
        </button>
    )}

    {currentPage !== totalPages - 1 && (
        <button
        onClick={() => setCurrentPage(currentPage + 1)}
        className="text-dark px-4 py-2 rounded-md"
        >
        Next
        </button>
    )}
    </div>
  );
};

export default FotorafPagination;
