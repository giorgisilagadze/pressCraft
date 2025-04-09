"use client";

// import Hint from "@/components/Hint";
import QuizButton from "@/components/QuizButton";
import SeeMore from "@/components/SeeMore";
import { PrimaryContext } from "@/utils/MainContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
// import { FaRegLightbulb } from "react-icons/fa6";
import { MdOutlineZoomIn } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function SingleQuiz({ params }: { params: { quizId: string } }) {
  const { quiz } = useContext(PrimaryContext);
  // const [isHintVisible, setIsHintVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPopUpImageVis, setIsPopUpImageVis] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  // const hintRef = useRef<HTMLDivElement>(null);

  const route = useRouter();

  const quizIndex = parseInt(params.quizId) - 1;

  const renderTextWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    return text.split(urlRegex).map((part, index) =>
      urlRegex.test(part) ? (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {part}
        </a>
      ) : (
        part
      )
    );
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsVisible(false);
      }

      // if (hintRef.current && !hintRef.current.contains(event.target as Node)) {
      //   setIsHintVisible(false);
      // }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="w-[100vw] h-[100vh] overflow-x-hidden bg-black relative">
        <div className="w-full h-5 bg-[#382468] absolute top-0 left-0 z-10">
          <div
            className={`h-full bg-[#7a3678]`}
            style={{
              width: `${(parseInt(params.quizId) / quiz.length) * 100}%`,
            }}
          >
            <p className="text-white text-end text-[14px] pr-2">
              {params.quizId}/{quiz.length}
            </p>
          </div>
        </div>
        <div className="w-[1000px] relative left-[50%] translate-x-[-50%] top-[-94px]">
          <img
            src="../images/quiz.jpeg"
            alt="quiz"
            className="w-full object-cover "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.7)] from-30% to-transparent"></div>
        </div>
        <div className="absolute w-full top-[30%] sm:top-[40%] left-[50%] translate-x-[-50%] flex flex-col items-center justify-center gap-[40px] lg:px-[100px] sm:px-[60px] px-6">
          <div className="max-w-[1000px]">
            <h1 className="medium lg:text-[40px] sm:text-[32px] text-[24px] text-white">
              {quiz[quizIndex].question}
            </h1>
            <div className="relative" ref={ref}>
              <p
                className="regular lg:text-[30px] sm:text-[26px] text-[20px] text-white cursor-pointer lg:hover:opacity-50 duration-300 w-[200px]"
                onClick={() => setIsVisible(true)}
              >
                ...მეტის ნახვა
              </p>
              <SeeMore isVisible={isVisible} text={quiz[quizIndex].seeMore} />
            </div>
          </div>

          {quiz[quizIndex].image && (
            <div className="relative" onClick={() => setIsPopUpImageVis(true)}>
              <img
                src={quiz[quizIndex].image}
                alt="image"
                className="w-[300px] h-[200px] rounded-[12px] object-cover cursor-pointer hover:opacity-80 duration-300"
              />
              <MdOutlineZoomIn className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[30px]" />
            </div>
          )}

          <div className="flex flex-col gap-5 pb-10 items-center">
            <QuizButton
              title="True"
              quizId={params.quizId}
              titleGeo={"გამოვაქვეყნებ"}
              setIsAnswered={setIsAnswered}
              isAnswered={isAnswered}
            />
            <QuizButton
              title="False"
              quizId={params.quizId}
              titleGeo={"არ გამოვაქვეყნებ"}
              setIsAnswered={setIsAnswered}
              isAnswered={isAnswered}
            />
            {/* {quiz[quizIndex].hint !== "" && (
              <div className="w-full flex flex-col gap-5" ref={hintRef}>
                <div
                  className="flex items-center justify-center gap-2 cursor-pointer lg:hover:opacity-50 duration-300"
                  onClick={() => setIsHintVisible(true)}
                >
                  <FaRegLightbulb className="text-[30px] text-white" />
                  <p className="regular sm:text-[24px] text-[20px] text-white ">
                    მინიშნება
                  </p>
                </div>
                <Hint isVisible={isHintVisible} text={quiz[quizIndex].hint} />
              </div>
            )} */}
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center duration-300 ${
          isPopUpImageVis
            ? "bg-[rgba(0,0,0,0.5)] opacity-100 !z-[4]"
            : "bg-transparent opacity-0 -z-[1]"
        }`}
      >
        <div
          className={`${
            isPopUpImageVis ? "w-[100vw] h-[100vh]" : "w-0 h-[100vh]"
          } top-0 right-0 z-[5] absolute`}
          onClick={() => {
            setIsPopUpImageVis(false);
          }}
        ></div>
        <div
          className={`${
            quiz[quizIndex].image == "../images/mark.jpg"
              ? "md500:w-[450px] w-[90%]"
              : "lg:w-[55%] sm:w-[80%] w-[90%]"
          } flex flex-col gap-5 z-[6]`}
        >
          <RxCross2
            className="text-[24px] text-mainColor cursor-pointer text-white lg:hover:opacity-45 duration-200 self-end"
            onClick={() => setIsPopUpImageVis(false)}
          />
          <img
            src={quiz[quizIndex].image}
            alt="image"
            className="w-full sm:h-[500px] h-[350px] rounded-[12px]"
          />
        </div>
      </div>
      <div
        className={`${
          isAnswered
            ? "bg-[rgba(0,0,0,0.5)] opacity-100 z-[50]"
            : "bg-transparent opacity-0 -z-10"
        } fixed top-0 left-0 w-full h-full flex justify-center items-start  duration-300`}
      >
        <div className="sm:w-[550px] w-[90%] bg-black rounded-[5px] z-[52] border border-white mt-10">
          <div className="w-full py-[30px] md600:px-6 px-4 flex flex-col gap-6 items-center">
            <p className="medium lg:text-[20px] sm:text-[18px] text-[14px] text-white text-center">
              {renderTextWithLinks(quiz[quizIndex].hint)}
            </p>
            <button
              className={`md500:w-[330px] w-full h-[70px] rounded-[20px] text-white sm:text-[20px] text-[18px] semibold bg-[#1b1a1b] lg:hover:bg-[#9c9d9c] duration-300`}
              onClick={() => {
                if (parseInt(params.quizId) == 14) {
                  route.push("/finish");
                } else {
                  route.push(`/quiz/${parseInt(params.quizId) + 1}`);
                }
              }}
            >
              {"გაგრძელება"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
