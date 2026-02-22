
"use client";
import { useState, useEffect } from "react";

export default function Typewriter({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className="relative inline-block">
      <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
        {displayedText}
      </span>
      <span className="ml-1 inline-block w-[3px] h-[0.9em] bg-cyan-400 animate-pulse align-middle" />
    </span>
  );
}