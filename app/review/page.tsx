import QuizCard from "@/components/QuizCard";

export default function Review() {
  return (
    <div className="w-[100vw] h-[100vh] bg-black flex items-center justify-center flex-col gap-[60px] px-[200px]">
      <div>
        <h1 className="medium text-[26px] text-white">Your reviewed stories</h1>
        <p className="regular text-[14px] text-white text-center">
          Go back and recheck if needed
        </p>
      </div>
      <div className="w-full grid grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <QuizCard key={item} quizNumber={item} />
        ))}
      </div>
      <button className="w-[270px] h-[70px] bg-white rounded-[20px] cursor-pointer hover:bg-[#9c9d9c] duration-300">
        Finish
      </button>
    </div>
  );
}
