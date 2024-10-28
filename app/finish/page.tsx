"use client";

import Link from "next/link";
import { IoRocketSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";

import { usePDF } from "react-to-pdf";

export default function Finish() {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  return (
    <>
      <div className="w-[100vw] h-[100vh] overflow-hidden bg-black relative">
        <div className="w-full relative">
          <img
            src="./images/background.png"
            alt="galaxy"
            className="w-full h-[200px]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,1)] from-10% to-[rgba(0,0,0,0.7)]"></div>
        </div>
        <div className="absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-60%] w-[80%] py-[70px] bg-[#1b1a1b] rounded-[34px] flex items-center justify-center flex-col gap-8">
          <h1 className="bold text-[36px] text-white text-center w-[400px]">
            Your newspaper is ready!
          </h1>
          <IoRocketSharp className="text-[40px] text-white" />
          <Link href={"/review"}>
            <button className="w-[270px] h-[70px] bg-white rounded-[20px] cursor-pointer hover:bg-[#9c9d9c] duration-300">
              Review
            </button>
          </Link>
          <button
            className="w-[270px] h-[70px] bg-white rounded-[20px] cursor-pointer hover:bg-[#9c9d9c] duration-300"
            onClick={() => toPDF()}
          >
            Download
          </button>
          <div className="flex flex-col items-center gap-5">
            <p className="regular text-[20px] text-white">
              or share on social media
            </p>
            <div className="flex items-center gap-5">
              <FaFacebook className="text-[40px] text-white cursor-pointer hover:opacity-50 duration-200" />
              <FaFacebookMessenger className="text-[40px] text-white cursor-pointer hover:opacity-50 duration-200" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full paper absolute top-0 left-0 -z-10" ref={targetRef}>
        <div className="w-full px-[50px] py-6 flex flex-col gap-5">
          <div className="w-full flex items-center justify-between">
            <p>Edition nº 1</p>
            <p>Thursday, October 20, 2024</p>
          </div>
          <hr className="w-full bg-black border-none h-[1px] " />
          <h1 className="text-center text-[40px] bold">Our Company News</h1>
        </div>
      </div>
    </>
  );
}
