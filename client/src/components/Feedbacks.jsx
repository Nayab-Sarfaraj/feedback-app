import React from "react";
import FeedbackCard from "./FeedbackCard";
const Feedbacks = ({ feedbacks }) => {
  return feedbacks.map((item) => <FeedbackCard key={item?._id} item={item} />);
};

export default Feedbacks;
