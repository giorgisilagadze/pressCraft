import Link from "next/link";

export default function GetReady() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden bg-black relative">
      <div className="w-[1000px] relative left-[50%] translate-x-[-50%] -top-[45%]">
        <img
          src="./images/galaxy.jpeg"
          alt="galaxy"
          className="w-full object-cover "
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.3)] via-[rgba(0,0,0,0.7)] to-transparent"></div>
      </div>
      <Link href={"/quiz/1"}>
        <div className="absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-60%] w-[80%] sm:h-[548px] h-[400px] bg-[#1b1a1b] rounded-[34px] flex items-center justify-center flex-col gap-5 cursor-pointer lg:hover:opacity-80 duration-500">
          {/* <HiOutlineTrophy className="text-[100px] text-white" /> */}
          <img src="./images/trophy.png" alt="trophy" className="w-[100px]" />
          <div>
            <h1 className="bold lg:text-[50px] sm:text-[38px] text-[32px]  text-white text-center">
              Let’s Play!
            </h1>
            <h3 className="semibold lg:text-[30px] sm:text-[26px] text-[20px] text-white text-center">
              Carefully chose stories!
            </h3>
          </div>
          <p className="regular lg:text-[20px] sm:text-[18px] text-white">
            Remember, you are an editor
          </p>
        </div>
      </Link>
    </div>
  );
}
