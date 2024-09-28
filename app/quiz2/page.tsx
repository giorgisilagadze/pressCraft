"use client";

import QuizButton from "@/components/QuizButton";
import { useState } from "react";

export default function Quiz2() {
  const [checked, setChecked] = useState("");
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden bg-black relative">
      <div className="w-[1000px] relative left-[50%] translate-x-[-50%] top-[-115px]">
        <img
          src="./images/quiz.jpeg"
          alt="quiz"
          className="w-full object-cover "
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.7)] from-30% to-transparent"></div>
      </div>
      <div className="absolute w-full top-[80%] translate-y-[-80%] left-[50%] translate-x-[-50%] flex flex-col items-center justify-center gap-[60px]">
        <h1 className="medium text-[40px] text-white">
          ,,Water Found on the Moon’s Surface by NASA”
        </h1>
        <div className="flex items-center gap-[150px]">
          <img
            src="./images/image.png"
            alt="image1"
            className="w-[200px] h-[200px] rounded-[40px] object-cover"
          />
          <img
            src="./images/image2.png"
            alt="image2"
            className="w-[200px] h-[200px] rounded-[40px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-5">
          <QuizButton title="True" setChecked={setChecked} checked={checked} />
          <QuizButton title="False" setChecked={setChecked} checked={checked} />
        </div>
      </div>
    </div>
  );
}
