"use client";
import { useState } from "react";

import Link from "next/link";
export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const handleClick2 = () => {
    console.log("goto");
    setIsClicked2(!isClicked2);
    setTimeout(() => {
      setIsClicked2(false);
    }, 300);
  };

  const handleClick = () => {
    console.log("clicked");
    setIsClicked(!isClicked);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };
  return (
    <div className="flex flex-col">
      <div className="flex bg-gray-400 w-screen  justify-center h-auto">
        <h1 className="font-bold text-sm text-blue-700/45 hover:text-blue-700 lg:text-6xl py-4">
          School Management System
        </h1>
      </div>
      <div className="relative shadow-lg  flex justify-center w-screen md:w-2xl self-center content-center flex-col rounded-2xl mt-10 border-lime-200 border-2 ">
        <div>
          <h1 className="justify-self-center">LOG IN</h1>
        </div>
        <hr className="border-3 w-28 self-center"></hr>
        <input
          type="text"
          placeholder="Username"
          className="p-2 bg-neutral-500 w-68 mt-4 mb-4 rounded-full self-center text-white placeholder:self-center placeholder:text-white"
        />
        <input
          type="Password"
          placeholder="Password"
          className="p-2 bg-neutral-500 w-68 mt-4 mb-4 rounded-full self-center text-white placeholder:self-center placeholder:text-white"
        />
        <button
          onClick={handleClick}
          className={`bg-blue-600 shadow-lg hover:shadow-blue-400/50 text-white font-bold py-2 px-4 rounded cursor-pointer w-22 self-center mb-4 transition-all duration-300 ease-in-out  hover:shadow-lg transform before:absolute before:inset-0 before:rounded-lg 
        before:blur-md before:opacity-70 before:content-[''] 
        before:bg-blue-500 before:animate-pulse
        before:z-[-1] ${isClicked ? "scale-90" : "scale-100"}`}
        >
          LOG IN
        </button>
        <div className="flex justify-center-safe ">
          <span className="">Forgotten Password?</span>
          <Link href="">
            <span className="text-blue-700 ml-2">
              <u>Click here</u>
            </span>
          </Link>
        </div>
        <span className="self-center font-semibold text-md antialiased">
          OR
        </span>

        <button
          onClick={handleClick2}
          className={` mb-4 mt-2 transition-all duration-300 ease-in-out ${
            isClicked2 ? "shadow-lg shadow-teal-500/50" : "bg-blue-400"
          } bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-fit self-center shadow hover:shadow-lg`}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}
