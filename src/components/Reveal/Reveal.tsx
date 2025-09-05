"use client";
import { useEffect, useRef } from "react";

type Props = { className?: string; children: React.ReactNode };

export default function Reveal({ className = "", children }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current!;
    const intersection = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          element.classList.add("is-visible");
          intersection.disconnect();
        }
      },
      { rootMargin: "-10% 0px" }
    );
    intersection.observe(element);
    return () => intersection.disconnect();
  }, []);
  return (
    <section
      ref={ref}
      className={`reveal ${className}`}
    >
      {children}
    </section>
  );
}
