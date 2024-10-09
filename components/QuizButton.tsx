"use client";

import { useRouter } from "next/navigation";

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
  return (
    <button
      className={`w-[330px] h-[70px] rounded-[20px] ${
        checked == title ? "bg-[#9c9d9c]" : "bg-[#1b1a1b]"
      }  text-white text-[20px] semibold hover:bg-[#9c9d9c] duration-300`}
      onClick={() => {
        setChecked(title);
        if (parseInt(quizId) == 10) {
          route.push("/finish");
        } else {
          route.push(`/quiz/${parseInt(quizId) + 1}`);
        }
      }}
    >
      {title}
    </button>
  );
}
