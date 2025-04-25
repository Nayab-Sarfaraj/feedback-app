import axios from "axios";
import React, { useEffect, useState } from "react";
import Feedbacks from "../components/Feedbacks";
import Pagination from "../components/Pagination";
import ShowFeedbackBtn from "../components/ShowFeedbackBtn";
const ViewFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [totalFeedbacks, setTotalFeedback] = useState(0);

  const fetchFeedbacks = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/feedbacks?page=${page}`
      );
      console.log(data);
      setFeedbacks(data.feedbacks);
      setTotalFeedback(data.totalFeedbacks);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const changePage = (page) => {
    setPage(page);
  };
  useEffect(() => {
    fetchFeedbacks();
  }, [page]);
  return (
    <div className="flex items-center justify-center flex-col bg-[#EFEFEF] dark:bg-[#191919] w-full min-h-screen md:px-16  p-5  gap-4 py-10 space-y-3  transition-all ease-in-out">
      <ShowFeedbackBtn handleClick={handleClick} isOpen={isOpen} />

      {feedbacks?.length > 0 && isOpen && <Feedbacks feedbacks={feedbacks} />}

      {isOpen && totalFeedbacks > 0 && (
        <Pagination changePage={changePage} totalFeedbacks={totalFeedbacks} />
      )}
    </div>
  );
};

export default ViewFeedbacks;
