"use client";

import Hint from "@/components/Hint";
import QuizButton from "@/components/QuizButton";
import SeeMore from "@/components/SeeMore";
import { useEffect, useRef, useState } from "react";
import { FaRegLightbulb } from "react-icons/fa6";

export default function SingleQuiz({ params }: { params: { quizId: string } }) {
  const [checked, setChecked] = useState("");
  const [isHintVisible, setIsHintVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsHintVisible(false);
        setIsVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {parseInt(params.quizId) % 2 == 0 ? (
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
                src="../images/image.png"
                alt="image1"
                className="w-[200px] h-[200px] rounded-[40px] object-cover"
              />
              <img
                src="../images/image2.png"
                alt="image2"
                className="w-[200px] h-[200px] rounded-[40px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <QuizButton
                title="True"
                setChecked={setChecked}
                checked={checked}
                quizId={params.quizId}
              />
              <QuizButton
                title="False"
                setChecked={setChecked}
                checked={checked}
                quizId={params.quizId}
              />
              <div className="relative" ref={ref}>
                <div
                  className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-50 duration-300"
                  onClick={() => setIsHintVisible(true)}
                >
                  <FaRegLightbulb className="text-[30px] text-white" />
                  <p className="regular text-[24px] text-white ">Hint</p>
                </div>
                <Hint
                  isVisible={isHintVisible}
                  title="Lovely tooltip title"
                  text="There are a lot of things you can do in space, and space essentially is unlimited resources."
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[100vw] h-[100vh] overflow-hidden bg-black relative">
          <div className="w-[1000px] relative left-[50%] translate-x-[-50%] top-[-115px]">
            <img
              src="../images/quiz.jpeg"
              alt="quiz"
              className="w-full object-cover "
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.7)] from-30% to-transparent"></div>
          </div>
          <div className="absolute w-full left-[50%] translate-x-[-50%] flex flex-col items-center justify-center gap-[80px]">
            <div>
              <h1 className="medium text-[40px] text-white">
                ,,Water Found on the Moon’s Surface by NASA”
              </h1>
              <div className="relative" ref={ref}>
                <p
                  className="regular text-[30px] text-white cursor-pointer hover:opacity-50 duration-300 w-[180px]"
                  onClick={() => setIsVisible(true)}
                >
                  ...see more
                </p>
                <SeeMore
                  isVisible={isVisible}
                  text="NASA's SOFIA has detected water on the Moon's sunlit surface, specifically in Clavius Crater. The discovery shows water molecules in concentrations ranging from 100 to 412 parts per million in lunar soil. This finding challenges previous notions of water distribution on the Moon and could have implications for future space exploration."
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <QuizButton
                title="True"
                setChecked={setChecked}
                checked={checked}
                quizId={params.quizId}
              />
              <QuizButton
                title="False"
                setChecked={setChecked}
                checked={checked}
                quizId={params.quizId}
              />
              <div className="relative" ref={ref}>
                <div
                  className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-50 duration-300"
                  onClick={() => setIsHintVisible(true)}
                >
                  <FaRegLightbulb className="text-[30px] text-white" />
                  <p className="regular text-[24px] text-white ">Hint</p>
                </div>
                <Hint
                  isVisible={isHintVisible}
                  title="Lovely tooltip title"
                  text="There are a lot of things you can do in space, and space essentially is unlimited resources."
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
