import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="w-full h-screen flex items-center justify-between overflow-x-hidden"
      aria-label="Hero section with introduction"
    >
      <div className="p-8 mx-auto flex flex-col md:flex-row  items-center h-full text-center gap-8">
        <div className="text-white flex flex-col gap-4 justify-center md:w-1/2 w-full">
          <h2 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold">
            Hi there, I am
          </h2>
          <h2 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Rafal Bobko!
          </h2>

          <p className="lg:text-3xl sm:text-xl text-lg lg:my-6 my-2 text-gray-200">
            I am an experienced developer. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Cupiditate nihil voluptatibus vero
            odit odio numquam modi veniam quisquam consectetur rerum?
          </p>

          <div className="flex sm:flex-row flex-col justify-center gap-4 lg:mt-4 mt-2">
            <button className="md:px-8 px-4 md:py-4 py-2 md:text-xl text-lg font-semibold rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-white transition-transform duration-200 hover:scale-105">
              Hire Me
            </button>
            <button className="md:px-8 px-4 md:py-4 py-2 md:text-xl text-lg font-semibold border-2 border-white rounded-md text-white transition-transform duration-200 hover:scale-105 hover:bg-white hover:text-black">
              About Me
            </button>
          </div>
        </div>

        <div className="relative md:w-1/2 w-full hidden md:flex justify-center">
          <Image
            src="https://www.dropbox.com/scl/fi/rk2euib9rzjey7rkwg8q1/20250121_191332.png?rlkey=lpeccjsi3ofaglj6xfruobv1h&st=618n9cn1&raw=1"
            alt="Rafal Bobko"
            width={500}
            height={500}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
