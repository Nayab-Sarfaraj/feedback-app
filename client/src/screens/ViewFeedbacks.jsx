import axios from "axios";
import React, { useEffect, useState } from "react";
import Feedbacks from "../components/Feedbacks";
import Pagination from "../components/Pagination";
import ShowFeedbackBtn from "../components/ShowFeedbackBtn";
import toast from "react-hot-toast";
import CustomLoader from "../components/CustomLoader";
const ViewFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [totalFeedbacks, setTotalFeedback] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchFeedbacks = async () => {
    setFeedbacks([]);
    try {
      setIsLoading(true);
      // `http://localhost:8080/feedbacks?page=${page}`
      const { data } = await axios.get(
        `https://feedback-app-oava.onrender.com/feedbacks?page=${page}`
      );
      console.log(data);
      setFeedbacks(data.feedbacks);
      setTotalFeedback(data.totalFeedbacks);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
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
    <div className="flex items-center justify-between flex-col bg-[#EFEFEF] dark:bg-[#191919] w-full min-h-screen md:px-16  p-5  gap-4 py-10 space-y-3  transition-all ease-in-out">
      <ShowFeedbackBtn handleClick={handleClick} isOpen={isOpen} />
      {isOpen && (
        <>
          {isLoading && <CustomLoader />}
          {feedbacks?.length > 0 && <Feedbacks feedbacks={feedbacks} />}
          {totalFeedbacks > 0 && (
            <Pagination
              changePage={changePage}
              totalFeedbacks={totalFeedbacks}
            />
          )}
        </>
      )}
      {/* {isOpen && }
      

       */}
    </div>
  );
};

export default ViewFeedbacks;
