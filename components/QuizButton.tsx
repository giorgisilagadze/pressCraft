"use client";

import { PrimaryContext } from "@/utils/MainContext";
import { useContext } from "react";

interface Props {
  title: string;
  quizId: string;
  titleGeo: string;
  setIsAnswered: (isAnswered: boolean) => void;
  isAnswered: boolean;
}

export default function QuizButton({
  title,
  quizId,
  titleGeo,
  setIsAnswered,
  isAnswered,
}: Props) {
  const { quiz, setQuiz } = useContext(PrimaryContext);

  const handleCheck = () => {
    const updatedArr = quiz.map((item, index) =>
      index === parseInt(quizId) - 1
        ? { ...item, myAnswer: title === "True" }
        : item
    );

    const sanitizedArr = updatedArr.map(
      ({ id, question, seeMore, hint, answer, myAnswer, image }) => ({
        id,
        question,
        seeMore,
        hint,
        answer,
        myAnswer,
        image: typeof image === "string" ? image : undefined,
      })
    );

    setQuiz(sanitizedArr);
    localStorage.setItem("quiz", JSON.stringify(sanitizedArr));
  };

  return (
    <button
      className={`w-[330px] h-[70px] rounded-[20px] text-white sm:text-[20px] text-[18px] semibold bg-[#1b1a1b] duration-300 ${
        isAnswered &&
        (quiz[parseInt(quizId) - 1].answer
          ? title === "True"
            ? "bg-[green]"
            : "bg-[red]"
          : title === "True"
          ? "bg-[red]"
          : "bg-[green]")
      }     ${!isAnswered ? "lg:hover:bg-[#9c9d9c]" : ""}`}
      onClick={() => {
        handleCheck();
        setIsAnswered(true);
      }}
    >
      {titleGeo}
    </button>
  );
}
