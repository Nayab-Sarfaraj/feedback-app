import React from "react";

const Pagination = ({ totalFeedbacks, changePage }) => {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {Array(Math.ceil(totalFeedbacks / 6))
        .fill(0)
        .map((_, idx) => (
          <button
            key={idx}
            className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white hover:bg-blue-500 hover:text-white transition"
            onClick={() => changePage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
