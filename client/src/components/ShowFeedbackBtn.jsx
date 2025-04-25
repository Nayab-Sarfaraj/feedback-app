import React from "react";
import { EyeOff, Eye } from "lucide-react";
const ShowFeedbackBtn = ({ isOpen, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-md transition-all
                 bg-white text-gray-800 border border-gray-300
                 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
    >
      {isOpen ? <EyeOff size={18} /> : <Eye size={18} />}
      {isOpen ? "Hide Feedbacks" : "Show Feedbacks"}
    </button>
  );
};

export default ShowFeedbackBtn;
