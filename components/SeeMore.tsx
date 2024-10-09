interface Props {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  text: string;
}

export default function SeeMore({ isVisible, setIsVisible, text }: Props) {
  return (
    <div
      className={`bg-white max-w-[400px] rounded-[10px] p-5 absolute left-0 top-[60px] duration-500 ${
        isVisible
          ? "z-[1] opacity-100 pointer-events-auto"
          : " opacity-0 pointer-events-none"
      }`}
    >
      {text}
    </div>
  );
}
