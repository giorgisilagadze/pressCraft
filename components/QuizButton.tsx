"use client";

import { PrimaryContext } from "@/utils/MainContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface Props {
  title: string;
  checked: string;
  setChecked: (checked: string) => void;
  quizId: string;
  titleGeo: string;
}

export default function QuizButton({
  title,
  checked,
  setChecked,
  quizId,
  titleGeo,
}: Props) {
  const route = useRouter();
  const { quiz, setQuiz } = useContext(PrimaryContext);

  const handleCheck = () => {
    const updatedArr = quiz.map((item, index) =>
      index === parseInt(quizId) - 1
        ? { ...item, myAnswer: title === "True" }
        : item
    );

    // Sanitize the array to ensure all data is serializable
    const sanitizedArr = updatedArr.map(
      ({ id, question, seeMore, hint, answer, myAnswer, image }) => ({
        id,
        question,
        seeMore,
        hint,
        answer,
        myAnswer,
        image: typeof image === "string" ? image : undefined, // Only allow strings for `image`
      })
    );

    // Set the sanitized array in context and local storage
    setQuiz(sanitizedArr);
    localStorage.setItem("quiz", JSON.stringify(sanitizedArr)); // Safely store sanitized data
    console.log("Sanitized Array:", sanitizedArr); // For debugging purposes
  };

  return (
    <button
      className={`w-[330px] h-[70px] rounded-[20px] ${
        checked == title ? "bg-[#9c9d9c]" : "bg-[#1b1a1b]"
      }  text-white sm:text-[20px] text-[18px] semibold lg:hover:bg-[#9c9d9c] duration-300`}
      onClick={() => {
        setChecked(title);
        if (parseInt(quizId) == 14) {
          handleCheck();
          route.push("/finish");
        } else {
          handleCheck();
          route.push(`/quiz/${parseInt(quizId) + 1}`);
        }
      }}
    >
      {titleGeo}
    </button>
  );
}
