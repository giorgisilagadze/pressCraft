"use client";

import QuizCard from "@/components/QuizCard";
import { PrimaryContext } from "@/utils/MainContext";
import Link from "next/link";
import { useContext } from "react";

export default function Review() {
  const { quiz } = useContext(PrimaryContext);

  return (
    <div className="w-[100vw] overflow-x-hidden py-[100px] bg-black flex items-center justify-center flex-col gap-[60px] lg:px-[200px] sm:px-[100px] md:500:px-10 px-6">
      <div>
        <h1 className="medium text-[26px] text-white">Your reviewed stories</h1>
        <p className="regular text-[14px] text-white text-center">
          Go back and recheck if needed
        </p>
      </div>
      <div className="w-full grid lg1250:grid-cols-3 md500:grid-cols-2 md500:gap-8 gap-5">
        {quiz.map((item: Quiz) => (
          <QuizCard key={item.id} quizNumber={item.id} item={item} />
        ))}
      </div>
      <Link href={"/finish"}>
        <button className="w-[270px] h-[70px] bg-white rounded-[20px] cursor-pointer lg:hover:bg-[#9c9d9c] duration-300">
          Finish
        </button>
      </Link>
    </div>
  );
}
