import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const root = window.document.documentElement;
    const savedTheme = localStorage.getItem("color-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <div className="w-full flex flex-row items-center justify-center  p-6 bg-[#FFFFFF] dark:bg-[#242424] dark:text-[#FFFFFF] text-[#000000]">
      <div className="flex items-center justify-center gap-10 ">
        <Link to={"/feedbacks"}>Feedbacks</Link>
        <Link to={"/"}>Submit</Link>
        <button onClick={toggleTheme}>
          <p className="">{isDark ? "☀️" : "🌙"}</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
