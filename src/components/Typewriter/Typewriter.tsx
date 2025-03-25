import { useState, useEffect } from "react";

export default function Typewriter({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
      {displayedText}
      <span className="animate-blink text-cyan-400">|</span>
    </span>
  );
}
