import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

interface Props {
  quizNumber: number;
  item: Quiz;
}

export default function QuizCard({ quizNumber, item }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div
        className={`w-full h-[100px] rounded-[20px] ${
          item.answer == item.myAnswer ? "bg-[green]" : "bg-[red]"
        } px-8 flex items-center justify-center cursor-pointer lg:hover:opacity-60 duration-300`}
        onClick={() => setIsClicked(true)}
      >
        <p className="medium lg:text-[36px] sm:text-[32px] text-[24px] text-white ">
          ამბავი {quizNumber}
        </p>
        {/* <div className="flex items-center gap-3">
        <TbArrowBackUpDouble className="text-[22px] text-white cursor-pointer hover:opacity-50 duration-200" />
        <FaArrowRightLong className="text-[18px] text-white cursor-pointer hover:opacity-50 duration-200" />
      </div> */}
      </div>
      <div
        className={`${
          isClicked
            ? "bg-[rgba(0,0,0,0.5)] opacity-100 z-[50]"
            : "bg-transparent opacity-0 -z-10"
        } fixed top-0 left-0 w-full h-full flex justify-center items-center  duration-300`}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full z-[50]`}
          onClick={() => {
            setIsClicked(false);
          }}
        ></div>
        <div className="sm:w-[550px] w-[90%] bg-black rounded-[5px] z-[102]">
          <div className="w-full flex justify-between items-center px-6 py-4">
            <p className="medium lg:text-[24px] sm:text-[20px] text-[16px] text-[gray] ">
              ამბავი {quizNumber}
            </p>
            <div
              className="w-8 h-8 rounded-[50%] border border-[gray] flex items-center justify-center cursor-pointer hover:shadow-header duration-300"
              onClick={() => setIsClicked(false)}
            >
              <RxCross2 className="text-[16px] text-[gray]" />
            </div>
          </div>
          <hr className="w-full border-none h-[1px] bg-[gray] " />
          <div className="w-full py-[30px] md600:px-6 px-4">
            <p className="medium lg:text-[20px] sm:text-[18px] text-[14px] text-white text-center">
              {item.question}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
