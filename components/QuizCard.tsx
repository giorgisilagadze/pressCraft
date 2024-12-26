import { FaArrowRightLong } from "react-icons/fa6";
import { TbArrowBackUpDouble } from "react-icons/tb";

interface Props {
  quizNumber: number;
  item: Quiz;
}

export default function QuizCard({ quizNumber, item }: Props) {
  return (
    <div
      className={`w-full h-[100px] rounded-[20px] ${
        item.answer == item.myAnswer ? "bg-[green]" : "bg-[red]"
      } px-8 flex items-center justify-center`}
    >
      <p className="medium lg:text-[36px] sm:text-[32px] text-[24px] text-white ">
        Story {quizNumber}
      </p>
      {/* <div className="flex items-center gap-3">
        <TbArrowBackUpDouble className="text-[22px] text-white cursor-pointer hover:opacity-50 duration-200" />
        <FaArrowRightLong className="text-[18px] text-white cursor-pointer hover:opacity-50 duration-200" />
      </div> */}
    </div>
  );
}
