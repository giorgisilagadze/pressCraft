"use client";

interface Props {
  title: string;
  checked: string;
  setChecked: (checked: string) => void;
}

export default function QuizButton({ title, checked, setChecked }: Props) {
  return (
    <button
      className={`w-[330px] h-[70px] rounded-[20px] ${
        checked == title ? "bg-[#9c9d9c]" : "bg-[#1b1a1b]"
      }  text-white text-[20px] semibold hover:bg-[#9c9d9c] duration-300`}
      onClick={() => setChecked(title)}
    >
      {title}
    </button>
  );
}
