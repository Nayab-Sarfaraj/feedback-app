import React from "react";
import { Loader } from "lucide-react";

const CustomLoader = () => {
  return (
    <Loader
      size={50}
      className="animate-spin dark:text-[#ffffff] text-[black]"
    />
  );
};

export default CustomLoader;
