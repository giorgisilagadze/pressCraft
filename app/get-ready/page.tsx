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
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]"></div>
      </div>
      <Link href={"/quiz"}>
        <div className="absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-60%] w-[80%] h-[548px] bg-[#1b1a1b] rounded-[34px] flex items-center justify-center flex-col gap-5 cursor-pointer hover:opacity-80 duration-500">
          {/* <HiOutlineTrophy className="text-[100px] text-white" /> */}
          <img src="./images/trophy.png" alt="trophy" className="w-[100px]" />
          <div>
            <h1 className="bold text-[50px] text-white text-center">
              Let’s Play!
            </h1>
            <h3 className="semibold text-[30px] text-white text-center">
              Carefully chose stories!
            </h3>
          </div>
          <p className="regular text-[20px] text-white">
            Remember, you are an editor
          </p>
        </div>
      </Link>
    </div>
  );
}
