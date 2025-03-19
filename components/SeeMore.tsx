interface Props {
  isVisible: boolean;
  text: string;
}

export default function SeeMore({ isVisible, text }: Props) {
  const renderTextWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    return text.split(urlRegex).map((part, index) =>
      urlRegex.test(part) ? (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {part}
        </a>
      ) : (
        part
      )
    );
  };
  return (
    <div
      className={`bg-white max-w-[400px] max-h-[250px] seeMore overflow-y-scroll rounded-[10px] p-5 absolute left-0 top-[60px] duration-500 ${
        isVisible
          ? "z-[1] opacity-100 pointer-events-auto"
          : " opacity-0 pointer-events-none"
      }`}
    >
      {renderTextWithLinks(text)}
    </div>
  );
}
