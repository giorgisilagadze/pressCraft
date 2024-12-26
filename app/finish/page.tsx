"use client";

import Link from "next/link";
import { IoRocketSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";

import { usePDF } from "react-to-pdf";
import { useContext, useEffect, useState } from "react";
import { PrimaryContext } from "@/utils/MainContext";

export default function Finish() {
  const { quiz } = useContext(PrimaryContext);

  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const [correctsWithoutImage, setCorrectsWithoutImage] = useState<Quiz[]>([]);
  const [correctsWithImage, setCorrectsWithImages] = useState<Quiz[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const newArr = quiz.filter(
      (item: Quiz) => item.answer === item.myAnswer && item.image === ""
    );
    setCorrectsWithoutImage(newArr);
    console.log(newArr);

    const imagesArr = quiz.filter(
      (item: Quiz) => item.answer === item.myAnswer && item.image !== ""
    );
    setCorrectsWithImages(imagesArr);

    console.log(imagesArr);
  }, [quiz]);

  const handlePdf = () => {
    setIsVisible(true);
    setTimeout(() => {
      toPDF();
    }, 100);
    setTimeout(() => setIsVisible(false), 200);
  };

  return (
    <div className="!overflow-hidden w-[100vw] h-[100vh] finish">
      <div className="w-[100vw] h-[100vh] overflow-hidden bg-black relative">
        <div className="w-full relative">
          <img
            src="./images/background.png"
            alt="galaxy"
            className="w-full h-[200px]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,1)] from-10% to-[rgba(0,0,0,0.7)]"></div>
        </div>
        <div className="absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-60%] w-[80%] py-[70px] px-6 bg-[#1b1a1b] rounded-[34px] flex items-center justify-center flex-col gap-8">
          <h1 className="bold lg:text-[36px] sm:text-[30px] text-[24px] text-white text-center sm:w-[400px]">
            Your newspaper is ready!
          </h1>
          <IoRocketSharp className="text-[40px] text-white" />
          <Link href={"/review"}>
            <button className="sm:w-[270px] w-[250px] h-[70px] bg-white rounded-[20px] cursor-pointer hover:bg-[#9c9d9c] duration-300">
              Review
            </button>
          </Link>
          <button
            className="sm:w-[270px] w-[250px] h-[70px] bg-white rounded-[20px] cursor-pointer hover:bg-[#9c9d9c] duration-300"
            onClick={handlePdf}
          >
            Download
          </button>
          {/* <div className="flex flex-col items-center gap-5">
            <p className="regular text-[20px] text-white">
              or share on social media
            </p>
            <div className="flex items-center gap-5">
              <FaFacebook className="text-[40px] text-white cursor-pointer hover:opacity-50 duration-200" />
              <FaFacebookMessenger className="text-[40px] text-white cursor-pointer hover:opacity-50 duration-200" />
            </div>
          </div> */}
        </div>
      </div>
      <div
        className={`w-full paper absolute top-0 left-0 -z-10 !overflow-hidden ${
          isVisible ? "block" : "hidden"
        }`}
        ref={targetRef}
      >
        <div className="w-full px-[50px] py-6 flex flex-col gap-5">
          <div className="w-full flex items-center justify-between">
            <p>Edition nº 1</p>
            <p>Thursday, October 20, 2024</p>
          </div>
          <hr className="w-full bg-black border-none h-[1px] " />
          <h1 className="text-center text-[40px] bold">Our Company News</h1>
          <hr className="w-full bg-black border-none h-[1px] " />
          {correctsWithImage.length !== 0 && (
            <div className="w-full flex flex-col gap-[60px]">
              <div className="w-full flex flex-col gap-6">
                <h1 className="text-[30px] bold">
                  {correctsWithImage[0].question}
                </h1>
                <p className="medium">{correctsWithImage[0].seeMore}</p>
              </div>
              <div className="relative w-full">
                <img
                  src={correctsWithImage[0].image}
                  alt="image"
                  className="w-full h-[260px] object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] z-10"></div>
              </div>
              <hr className="w-full bg-black border-none h-[1px] " />
            </div>
          )}
          {correctsWithoutImage.length >= 2 && (
            <div className="w-full grid grid-cols-2 py-5">
              <div className="w-full p-5 border-r border-black flex flex-col gap-3">
                <h1 className="text-[24px] bold">
                  {correctsWithoutImage[0].question}
                </h1>
                <p className="medium">{correctsWithoutImage[0].seeMore}</p>
              </div>
              <div className="w-full p-5 flex flex-col gap-3">
                <h1 className="text-[24px] bold">
                  {correctsWithoutImage[1].question}
                </h1>
                <p className="medium">{correctsWithoutImage[1].seeMore}</p>
              </div>
            </div>
          )}
          {correctsWithImage.length >= 2 && (
            <div className="w-full grid grid-cols-2 py-5 items-center">
              <div className="relative w-full">
                <img
                  src={correctsWithImage[1].image}
                  alt="image"
                  className="w-full h-[260px] object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] z-10"></div>
              </div>
              <div className="w-full p-5 flex flex-col gap-3">
                <h1 className="text-[24px] bold">
                  {correctsWithImage[1].question}
                </h1>
                <p className="medium">{correctsWithImage[1].seeMore}</p>
              </div>
            </div>
          )}
          {correctsWithoutImage.length >= 3 && (
            <div className="w-full flex flex-col gap-[60px]">
              <div className="w-full flex flex-col gap-6">
                <h1 className="text-[30px] bold">
                  {correctsWithoutImage[2].question}
                </h1>
                <p className="medium">{correctsWithoutImage[2].seeMore}</p>
              </div>
              <div className="w-full border border-t border-black"></div>
            </div>
          )}
          <div className="w-full grid grid-cols-2 py-5">
            {correctsWithoutImage.length >= 4 && (
              <div className="w-full p-5 border-r border-black flex flex-col gap-3">
                <h1 className="text-[24px] bold">
                  {correctsWithoutImage[3].question}
                </h1>
                <p className="medium">{correctsWithoutImage[3].seeMore}</p>
              </div>
            )}
            {correctsWithoutImage.length >= 5 && (
              <div className="w-full p-5 flex flex-col gap-3">
                <h1 className="text-[24px] bold">
                  {correctsWithoutImage[4].question}
                </h1>
                <p className="medium">{correctsWithoutImage[4].seeMore}</p>
              </div>
            )}
          </div>
          <div className="w-full grid grid-cols-2 py-5">
            {correctsWithoutImage.length >= 6 && (
              <div className="w-full p-5 border-r border-black flex flex-col gap-3">
                <h1 className="text-[24px] bold">
                  {correctsWithoutImage[5].question}
                </h1>
                <p className="medium">{correctsWithoutImage[5].seeMore}</p>
              </div>
            )}
            {correctsWithoutImage.length >= 7 && (
              <div className="w-full p-5 flex flex-col gap-3">
                <h1 className="text-[24px] bold">
                  {correctsWithoutImage[6].question}
                </h1>
                <p className="medium">{correctsWithoutImage[6].seeMore}</p>
              </div>
            )}
          </div>
          {correctsWithImage.length >= 3 && (
            <div className="w-full grid grid-cols-2 py-5 items-center">
              <div className="relative w-full">
                <img
                  src={correctsWithImage[2].image}
                  alt="image"
                  className="w-full h-[260px] object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] z-10"></div>
              </div>
              <div className="w-full p-5 flex flex-col gap-3">
                <h1 className="text-[24px] bold">
                  {correctsWithImage[2].question}
                </h1>
                <p className="medium">{correctsWithImage[2].seeMore}</p>
              </div>
            </div>
          )}
          {correctsWithImage.length >= 4 && (
            <div className="w-full grid grid-cols-2 py-5 items-center">
              <div className="relative w-full">
                <img
                  src={correctsWithImage[3].image}
                  alt="image"
                  className="w-full h-[260px] object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] z-10"></div>
              </div>
              <div className="w-full p-5 flex flex-col gap-3">
                <h1 className="text-[24px] bold">
                  {correctsWithImage[3].question}
                </h1>
                <p className="medium">{correctsWithImage[3].seeMore}</p>
              </div>
            </div>
          )}
          <div className="w-full grid grid-cols-2 py-5">
            {correctsWithoutImage.length >= 8 && (
              <div className="w-full p-5 border-r border-black flex flex-col gap-3">
                <h1 className="text-[24px] bold">
                  {correctsWithoutImage[7].question}
                </h1>
                <p className="medium">{correctsWithoutImage[7].seeMore}</p>
              </div>
            )}
            {correctsWithoutImage.length >= 9 && (
              <div className="w-full p-5 flex flex-col gap-3">
                <h1 className="text-[24px] bold">
                  {correctsWithoutImage[8].question}
                </h1>
                <p className="medium">{correctsWithoutImage[8].seeMore}</p>
              </div>
            )}
          </div>
          {correctsWithImage.length >= 5 && (
            <div className="w-full flex flex-col gap-[60px]">
              <div className="w-full flex flex-col gap-6">
                <h1 className="text-[30px] bold">
                  {correctsWithImage[4].question}
                </h1>
                <p className="medium">{correctsWithImage[4].seeMore}</p>
              </div>
              <div className="relative w-full">
                <img
                  src={correctsWithImage[4].image}
                  alt="image"
                  className="w-full h-[260px] object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] z-10"></div>
              </div>
              <hr className="w-full bg-black border-none h-[1px] " />
            </div>
          )}
          {correctsWithoutImage.length >= 10 && (
            <div className="w-full flex flex-col gap-6">
              <h1 className="text-[30px] bold">
                {correctsWithoutImage[9].question}
              </h1>
              <p className="medium">{correctsWithImage[9].seeMore}</p>
            </div>
          )}
          {correctsWithImage.length >= 6 && (
            <div className="w-full flex flex-col gap-[60px]">
              <div className="w-full flex flex-col gap-6">
                <h1 className="text-[30px] bold">
                  {correctsWithImage[5].question}
                </h1>
                <p className="medium">{correctsWithImage[5].seeMore}</p>
              </div>
              <div className="relative w-full">
                <img
                  src={correctsWithImage[5].image}
                  alt="image"
                  className="w-full h-[260px] object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] z-10"></div>
              </div>
              <hr className="w-full bg-black border-none h-[1px] " />
            </div>
          )}
          {correctsWithImage.length >= 7 && (
            <div className="w-full flex flex-col gap-[60px]">
              <div className="w-full flex flex-col gap-6">
                <h1 className="text-[30px] bold">
                  {correctsWithImage[6].question}
                </h1>
                <p className="medium">{correctsWithImage[6].seeMore}</p>
              </div>
              <div className="relative w-full">
                <img
                  src={correctsWithImage[6].image}
                  alt="image"
                  className="w-full h-[260px] object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] z-10"></div>
              </div>
              <hr className="w-full bg-black border-none h-[1px] " />
            </div>
          )}
          {correctsWithImage.length >= 8 && (
            <div className="w-full flex flex-col gap-[60px]">
              <div className="w-full flex flex-col gap-6">
                <h1 className="text-[30px] bold">
                  {correctsWithImage[7].question}
                </h1>
                <p className="medium">{correctsWithImage[7].seeMore}</p>
              </div>
              <div className="relative w-full">
                <img
                  src={correctsWithImage[7].image}
                  alt="image"
                  className="w-full h-[260px] object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] z-10"></div>
              </div>
              <hr className="w-full bg-black border-none h-[1px] " />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
