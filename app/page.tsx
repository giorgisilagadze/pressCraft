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
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-5 flex flex-col items-center sm:gap-[80px] gap-10">
        <div>
          <h3 className="regular sm:text-[40px] text-[32px] text-white">
            ციფრული
          </h3>
          <h1 className="semibold lg:text-[100px] md600:text-[60px] text-[40px] text-white -mt-5">
            გაზეთი
          </h1>
          <h3 className="regular lg:text-[40px] text-[24px] text-white lg:w-[820px] md600:w-[500px] w-[320px]">
            შედით რედაქტორების როლში, აირჩიეთ ისტორიები თქვენი გაზეთისთვის და
            ისწავლე მედიაწიგნიერების შესახებ
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
            <p className="medium text-[20px]">გამოიკვლიეთ</p>
            <FaArrowRightLong className="text-[20px]" />
          </button>
        </Link>
      </div>
    </div>
  );
}
