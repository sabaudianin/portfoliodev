import Features from "./Features";

export const Summary = () => {
  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="flex flex-col items-center mx-auto max-w-[78rem] px-6 py-8 gap-y-16">
        <div className="mx-auto max-w-[36.75rem] text-center text-gray-950 dark:text-gray-50">
          <h2 className="text-3xl font-bold mb-3 lg:text-4xl">
            Let me introduce myself.
          </h2>
          <p className="text-base">
            I'm a passionate and detail-oriented developer with a love for
            building elegant, user-focused digital experiences. With a strong
            background in modern web technologies and a problem-solving mindset,
            I aim to craft clean, efficient, and scalable code that brings ideas
            to life.
          </p>
        </div>

        <Features />
      </div>
    </section>
  );
};
