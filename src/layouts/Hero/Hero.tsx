import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-screen overflow-x-hidden">
      <div>
        <div className="w-[80%] mx-auto h-full flex justify-between items-center">
          <div className="h-full xl:w-[50%] md:w-[60%] sm:w-[70%] w-full text-white flex flex-col gap-4 justify-center">
            <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold">
              Hi there, I am
            </h1>
            <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Rafal Bobko!
            </h1>

            <p className="lg:text-3xl sm:text-xl text-lg lg:my-6 my-2 text-gray-200">
              I am an experienced developer Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Cupiditate nihil voluptatibus vero
              odit odio numquam modi veniam quisquam consectetur rerum?
            </p>

            <div className="flex sm:flex-row flex-col gap-4 lg:mt-4 mt-2">
              <button className="md:px-8 px-4 md:py-4 py-2 md:text-xl text-lg font-semibold rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-white transition-transform duration-200 hover:scale-105">
                Hire Me
              </button>
              <button className="md:px-8 px-4 md:py-4 py-2 md:text-xl text-lg font-semibold border-2 border-white rounded-md text-white transition-transform duration-200 hover:scale-105 hover:bg-white hover:text-black">
                About Me
              </button>
            </div>
          </div>
          <div className="relative  w-full mx-auto bg-[url('https://dl.dropboxusercontent.com/scl/fi/t3tzii5ck1e1mt7z54r9o/cvBlack.jpg?rlkey=stia4ramuhu1i4ejoc50q1try&st=t03doebf')] bg-contain bg-no-repeat  py-20"></div>
        </div>
      </div>
    </section>
  );
}
