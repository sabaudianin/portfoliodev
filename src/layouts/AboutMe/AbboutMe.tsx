export const AboutMe = () => {
  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="flex flex-col items-center mx-auto max-w-[78rem] px-6 py-32 gap-y-16">
        <div className="mx-auto max-w-[36.75rem] text-center text-gray-950 dark:text-gray-50">
          <h2 className="text-3xl font-bold mb-3 lg:text-4xl">
            Uisual Studio Features
          </h2>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae mattis tellus. Pellentesque commodo lacus at sodales.
          </p>
        </div>

        <div className="w-full grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="text-center"
            >
              <div className="w-fit mx-auto p-3 rounded-lg bg-white dark:bg-gray-950 ring-1 ring-inset ring-gray-200 dark:ring-gray-800">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                  className="fill-gray-950 dark:fill-white"
                >
                  <path d="M100 36H56a20 20 0 0 0-20 20v44a20 20 0 0 0 20 20h44a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20Zm-4 60H60V60h36Zm104-60h-44a20 20 0 0 0-20 20v44a20 20 0 0 0 20 20h44a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20Zm-4 60h-36V60h36Zm-96 40H56a20 20 0 0 0-20 20v44a20 20 0 0 0 20 20h44a20 20 0 0 0 20-20v-44a20 20 0 0 0-20-20Zm-4 60H60v-36h36Zm104-60h-44a20 20 0 0 0-20 20v44a20 20 0 0 0 20 20h44a20 20 0 0 0 20-20v-44a20 20 0 0 0-20-20Zm-4 60h-36v-36h36Z" />
                </svg>
              </div>
              <h4 className="mt-4 mb-2 text-gray-950 dark:text-gray-50 text-lg font-bold lg:text-xl">
                Lorem Ipsum
              </h4>
              <p className="text-base text-gray-950 dark:text-gray-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas vitae mattis tellus. Pellentesque commodo lacus at
                sodales.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
