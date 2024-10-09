"use client";

import Hint from "@/components/Hint";
import QuizButton from "@/components/QuizButton";
import { useEffect, useRef, useState } from "react";
import { FaRegLightbulb } from "react-icons/fa6";

export default function Quiz2() {
  const [checked, setChecked] = useState("");
  const [isHintVisible, setIsHintVisible] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsHintVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return <div>arfa</div>;
}
