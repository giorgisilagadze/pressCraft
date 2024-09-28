import { FaArrowRightLong } from "react-icons/fa6";
import { TbArrowBackUpDouble } from "react-icons/tb";

interface Props {
  quizNumber: number;
}

export default function QuizCard({ quizNumber }: Props) {
  return (
    <div className="w-full h-[100px] rounded-[20px] bg-[#1b1a1b] px-8 flex items-center justify-between">
      <p className="medium text-[36px] text-white">Story {quizNumber}</p>
      <div className="flex items-center gap-3">
        <TbArrowBackUpDouble className="text-[22px] text-white cursor-pointer hover:opacity-50 duration-200" />
        <FaArrowRightLong className="text-[18px] text-white cursor-pointer hover:opacity-50 duration-200" />
      </div>
    </div>
  );
}
