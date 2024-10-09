interface Props {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  text: string;
  title: string;
}

export default function Hint({ isVisible, setIsVisible, text, title }: Props) {
  return (
    <div
      className={`bg-[#1b1a1b] max-w-[400px] rounded-[10px] p-5 absolute right-[-450px] top-[-170px] duration-500 flex flex-col gap-4 ${
        isVisible
          ? "z-[1] opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <p className="text-white text-[20px] semibold">{title}</p>
      <p className="text-white regular">{text}</p>
    </div>
  );
}
