import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden relative">
      <img
        src="./images/background.png"
        alt="home-background"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-5 flex flex-col items-center gap-[80px]">
        <div>
          <h3 className="regular text-[40px] text-white">Digital</h3>
          <h1 className="semibold text-[100px] text-white -mt-5">Newspaper</h1>
          <h3 className="regular text-[40px] text-white w-[820px]">
            Step into editors shoes, choose stories for your newspaper and learn
            about media literacy
          </h3>
        </div>
        {/* <button className="w-[330px] h-[66px] rounded-[20px] bg-white flex items-center justify-center gap-2 shadow-button duration-200">
          <p className="medium text-[20px]">Explore</p>
          <FaArrowRightLong className="text-[20px]" />
        </button> */}
        <Link href={"/get-ready"}>
          <button
            className="button-49 !w-[330px] !h-[66px] rounded-[20px] bg-white flex items-center justify-center gap-2 shadow-button duration-200"
            role="button"
          >
            <p className="medium text-[20px]">Explore</p>
            <FaArrowRightLong className="text-[20px]" />
          </button>
        </Link>
      </div>
    </div>
  );
}
