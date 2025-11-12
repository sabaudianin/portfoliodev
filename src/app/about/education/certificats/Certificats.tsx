import Image from "next/image";

export const Certificats = () => {
  return (
    <section className="w-full">
      <h2 className="card--glitch text-center p-2 font-bold text-3xl sm:text-4xl my-8">
        Certificates:
      </h2>
      <div className="w-full p-2 text-center mx-auto flex flex-col gap-2 justify-center items-center">
        <Image
          src="/dyploms/cod.png"
          alt="coderslab"
          width={400}
          height={300}
        />
        <Image
          src="/dyploms/charp.png"
          alt="C#"
          width={400}
          height={300}
        />
        <Image
          src="/dyploms/js.avif"
          alt="JavaScript"
          width={400}
          height={300}
        />
        <Image
          src="/dyploms/react.avif"
          alt="react"
          width={400}
          height={260}
        />
        <Image
          src="/dyploms/ts.avif"
          alt="typescript"
          width={400}
          height={300}
        />
      </div>
    </section>
  );
};
