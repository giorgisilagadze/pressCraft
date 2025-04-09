import Link from "next/link";

export default function GetReady() {
  return (
    <div className="w-[100vw] h-[100vh] bg-black relative overflow-y-auto">
      <img
        src="./images/logo.png"
        alt="galaxy"
        className="w-full object-cover absolute top-0 left-0 z-[4]"
      />
      <div className="lg:w-[1000px] w-full relative left-[50%] translate-x-[-50%] lg:-top-[35%] sm:-top-[14%] top-0 z-[2]">
        <img
          src="./images/galaxy.jpeg"
          alt="galaxy"
          className="w-full object-cover "
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.3)] via-[rgba(0,0,0,0.7)] to-transparent"></div>
      </div>
      <div className="w-full h-full flex items-center justify-center absolute sm:top-[240px] top-[180px] left-0 z-[3]">
        <div className="sm:w-[80%] w-[90%] overflow-y-auto bg-[#1b1a1b] rounded-[34px] flex items-center justify-center flex-col sm:gap-5 gap-3 sm:p-10 p-4">
          <img
            src="./images/trophy.png"
            alt="trophy"
            className="sm:w-[100px] w-[60px]"
          />
          <div>
            <h1 className="bold lg:text-[50px] sm:text-[38px] text-[24px]  text-white text-center">
              მოდი, ვითამაშოთ!
            </h1>
            <h3 className="semibold lg:text-[26px] sm:text-[22px] text-[16px] text-white text-center">
              ფრთხილად შეარჩიეთ ამბები!
            </h3>
          </div>
          <div className="w-full flex flex-col gap-3 items-start">
            <p className="regular text-white sm:text-[16px] text-[14px]">
              მოთამაშე რედაქტორის როლს ირგებს და სარედაქციო გადაწყვეტილებებს
              იღებს, თუ რომელ ინფორმაციას გამოაქვეყნებს გაზეთში და შესაბამის
              ღილაკს აჭერს ხელს. ახალი ამბების შერჩევისას მოთამაშემ უნდა
              იხელმძღვანელოს შემდეგი კრიტერიუმებით:
            </p>
            <p className="regular text-white sm:text-[16px] text-[14px]">
              1. პასუხობს თუ არა ამბავი კითხვებს: ვინ, რა, სად, როდის, რატომ და
              როგორ?
            </p>
            <p className="regular text-white sm:text-[16px] text-[14px]">
              2. დაბალანსებულია თუ არა ინფორმაცია და წარმოდგენილია თუ არა სულ
              მცირე 2 დამოუკიდებელი წყარო?
            </p>
            <p className="regular text-white sm:text-[16px] text-[14px]">
              3. შეესაბამება თუ არა სათაური ტექსტს?
            </p>
            <p className="regular text-white sm:text-[16px] text-[14px]">
              4. ვიზუალი რეალურია თუ AI გენერირებული?
            </p>
            <p className="regular text-white sm:text-[16px] text-[14px]">
              თითოეულ კითხვას, პასუხის შემდეგ, სარედაქციო გადაწყვეტილების
              დასაბუთება მოსდევს. იმისათვის, რომ მოთამაშემ თამაშის წარმატებით
              დასრულება შეძლოს, 14-დან 10 შეკითხვას მაინც სწორად უნდა უპასუხოს.
              თამაშის წარმატებით დასრულების შემთხვევაში, რედაქტორი გაზეთის
              ელექტრონული ვერსიის გამოცემას შეძლებს. წარმატებულ რედაქტორს
              გაზეთის PDF ფორმატში ჩამოტვირთვა შეეძლება. თუ სწორი პასუხები 10-ზე
              ნაკლებია, რედაქტორი გაზეთის გამოქვეყნებას ვერ შეძლებს.
            </p>
            <p className="regular text-white sm:text-[16px] text-[14px]">
              წინამდებარე თამაში მომზადდა დოიჩე ველე აკადემიისა და MDF-ის მიერ
              განხორციელებული ConMeCo პროექტის ფარგლებში, ევროკავშირის ფინანსური
              მხარდაჭერით და გერმანიის ეკონომიკური განვითარებისა და
              თანამშრომლობის ფედერალური სამინისტროს თანადაფინანსებით. ამ თამაშის
              შინაარსი გუნდ pressCraft-ის პასუხისმგებლობაა და არ გამოხატავს
              ევროკავშირის და გერმანიის ფედერალური სამინისტროს შეხედულებებს.
            </p>
          </div>
          <Link href={"/quiz/1"}>
            <button className="sm:w-[270px] w-[250px] h-[70px] bg-white rounded-[20px] cursor-pointer lg:hover:bg-[#9c9d9c] duration-300 mt-4">
              დაწყება
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
