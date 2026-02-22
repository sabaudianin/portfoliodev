"use client";
import { useState, useEffect } from "react";

export const MouseGlow = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="glow-cursor hidden lg:block"
      style={{
        transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`
      }}
    />
  );
};