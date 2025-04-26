import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

const SubmitFeedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) return toast.error("Name is required");
    else if (!formData.feedback) return toast.error("Feedback is required");
    else if (!formData.email) return toast.error("Email is required");
    else if (!validateEmail(formData.email)) {
      return toast.error("Enter a valid email");
    }
    try {
      setIsLoading(true);

      const { data } = await axios.post(
        "https://feedback-app-oava.onrender.com/submit-feedback",
        {
          ...formData,
        }
      );
      console.log(data);
      if (data.success) {
        toast.success("Feedback sent successfully");
      }
      setFormData({ name: "", email: "", feedback: "" });
    } catch (error) {
      console.log(error);
      return toast.error(error.response?.data?.messgae);
    } finally {
      setIsLoading(false);
    }
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#EFEFEF] dark:bg-[#191919] h-screen flex items-center justify-center px-4">
      <div className="bg-[#FFFFFF] dark:bg-[#242424] md:w-96 w-full rounded-lg p-6 shadow-2xl ">
        <h2 className="text-[#000000] dark:text-[#FFFFFF] text-2xl font-semibold">
          Submit Feedback
        </h2>
        <form className="space-y-4 mt-3" onSubmit={onSubmit}>
          <div className="space-y-2">
            <label className="block text-[#000000] dark:text-[#9C9C9C]">
              Name
            </label>
            <input
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={onChange}
              className="w-full border border-[#DCDDDF] dark:border-[#3B3C4A] rounded-sm p-2 bg-[#FFFFFF] text-[#000000] dark:bg-[#000000] dark:text-[#FFFFFF]"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[#000000] dark:text-[#9C9C9C]">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={onChange}
              className="w-full border border-[#DCDDDF] dark:border-[#3B3C4A] rounded-sm p-2 bg-[#FFFFFF] text-[#000000] dark:bg-[#000000] dark:text-[#FFFFFF]"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[#000000] dark:text-[#9C9C9C]">
              Feedback
            </label>
            <textarea
              placeholder="Enter your feedback"
              name="feedback"
              value={formData.feedback}
              onChange={onChange}
              rows={5}
              className="resize-none w-full border border-[#DCDDDF] dark:border-[#3B3C4A] rounded-sm p-2 bg-[#FFFFFF] text-[#000000] dark:bg-[#000000] dark:text-[#FFFFFF]"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className=" w-full mt-4 py-2 px-4 rounded-md bg-[#000000] text-white dark:bg-[#FFFFFF] dark:text-[#000000] font-semibold hover:opacity-90 transition-opacity"
          >
            <div className="flex items-center justify-center gap-2 transition-all ease-in">
              Submit
              {isLoading && <Loader size={20} className="animate-spin" />}
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitFeedback;
