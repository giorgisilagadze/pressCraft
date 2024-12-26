interface Props {
  isVisible: boolean;
  text: string;
}

export default function Hint({ isVisible, text }: Props) {
  return (
    <div
      className={`bg-[#1b1a1b] w-full max-w-[330px] rounded-[10px] p-5 duration-500 flex flex-col gap-4 ${
        isVisible
          ? "z-[1] opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <p className="text-white regular">{text}</p>
    </div>
  );
}
