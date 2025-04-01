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
        <div className="flex flex-col gap-2">
          {/* <h3 className="regular sm:text-[40px] text-[32px] text-white">
            ციფრული გაზეთი
          </h3> */}
          <h1 className="semibold lg:text-[80px] md600:text-[60px] text-[36px] text-white -mt-2">
            ციფრული გაზეთი
          </h1>
          <h3 className="regular lg:text-[40px] text-[24px] text-white lg:w-[820px] md600:w-[500px] w-[320px]">
            შედით რედაქტორის როლში, აირჩიეთ სტატიები თქვენი გაზეთისთვის და
            ისწავლეთ მედიაწიგნიერების შესახებ
          </h3>
        </div>
        <Link href={"/get-ready"}>
          <button
            className="button-49 !w-[330px] !h-[66px] rounded-[20px] bg-white flex items-center justify-center gap-2 shadow-button duration-200"
            role="button"
          >
            <p className="medium text-[20px]">შესვლა</p>
            <FaArrowRightLong className="text-[20px]" />
          </button>
        </Link>
      </div>
    </div>
  );
}
