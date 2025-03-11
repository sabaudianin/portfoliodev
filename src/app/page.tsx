export default function Home() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
            <div className="md:col-span-1">
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>

                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur doloremque saepe architecto maiores repudiandae amet
                  perferendis repellendus, reprehenderit voluptas sequi.
                </p>
              </div>
            </div>

            <div className="md:col-span-3"></div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-950">
        <div className="w-full grid grid-cols-1 items-center mx-auto max-w-[52.5rem] px-6 py-32 gap-y-20 lg:grid-cols-2 lg:items-center lg:gap-x-6 lg:max-w-[78rem]">
          <div className="w-full col-span-1 flex flex-col gap-y-5 mx-auto max-w-[36.75rem] lg:max-w-full lg:h-full lg:mx-0 lg:pr-14">
            <a
              href="#"
              className="bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 ring-1 ring-inset ring-gray-200 dark:ring-gray-800 flex w-fit rounded-full p-0.5 gap-x-0.5 transition duration-[250ms] ease-in-out"
            >
              <div className="bg-gray-950 dark:bg-white text-white dark:text-gray-950 uppercase px-1.5 py-0.5 text-xs font-medium rounded-full">
                New
              </div>
              <div className="flex items-center gap-x-1 text-gray-950 dark:text-gray-50 px-1.5 py-0.5 text-xs font-medium">
                <span>Uisual design updates.</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 256 256"
                  className="fill-gray-950 dark:fill-white"
                >
                  <path d="m184.49 136.49-80 80a12 12 0 0 1-17-17L159 128 87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17Z" />
                </svg>
              </div>
            </a>
            <div className="lg:mt-auto text-gray-950 dark:text-gray-50">
              <h1 className="text-4xl font-bold mb-4 xl:text-5xl">
                Uisual Studio
              </h1>
              <p className="text-lg xl:text-xl">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas
                vitae mattis tellus ullam imperdiet.
              </p>
            </div>
            <div className="w-full flex flex-col items-center gap-4 lg:flex-row lg:justify-start">
              <a
                href="#"
                className="w-full lg:w-auto rounded-lg px-5 py-3 text-base font-medium text-center transition duration-[250ms] ease-in-out bg-blue-600 hover:bg-blue-700 text-white"
              >
                Get Started
              </a>
              <a
                href="#"
                className="w-full lg:w-auto rounded-lg px-5 py-3 text-base font-medium text-center transition duration-[250ms] ease-in-out bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 ring-1 ring-inset ring-gray-200 dark:ring-gray-800 text-gray-950 dark:text-gray-50"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
