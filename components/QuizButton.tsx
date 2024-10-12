"use client";

import { PrimaryContext } from "@/utils/MainContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface Props {
  title: string;
  checked: string;
  setChecked: (checked: string) => void;
  quizId: string;
}

export default function QuizButton({
  title,
  checked,
  setChecked,
  quizId,
}: Props) {
  const route = useRouter();
  const { quiz, setQuiz } = useContext(PrimaryContext);

  const handleCheck = () => {
    const updatedArr = quiz.map((item, index) =>
      index === parseInt(quizId) - 1
        ? { ...item, myAnswer: title === "True" }
        : item
    );
    setQuiz(updatedArr);
    localStorage.setItem("quiz", JSON.stringify(updatedArr));
  };

  return (
    <button
      className={`w-[330px] h-[70px] rounded-[20px] ${
        checked == title ? "bg-[#9c9d9c]" : "bg-[#1b1a1b]"
      }  text-white text-[20px] semibold hover:bg-[#9c9d9c] duration-300`}
      onClick={() => {
        setChecked(title);
        if (parseInt(quizId) == 12) {
          handleCheck();
          route.push("/finish");
        } else {
          handleCheck();
          route.push(`/quiz/${parseInt(quizId) + 1}`);
        }
      }}
    >
      {title}
    </button>
  );
}
