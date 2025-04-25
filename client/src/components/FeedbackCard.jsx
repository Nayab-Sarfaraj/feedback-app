import React from "react";
import moment from "moment";
const FeedbackCard = ({ item }) => {
  return (
    <div className="  bg-[#FFFFFF] rounded-lg w-full dark:bg-[#242424] shadow-md transition-all ease-in hover:shadow-2xl p-4 text-[#414141] dark:text-[#9C9C9C] flex flex-col justify-between">
      <p className=" capitalize">{item?.feedback}</p>
      <div className="space-y-1 mt-6">
        <div className="flex items-center justify-between w-full">
          <div className="capitalize">{item?.name}</div>
          <div>{moment(item?.createdAt).fromNow()}</div>
        </div>
        <div>
          Email : <span className="italic">{item?.email}</span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
