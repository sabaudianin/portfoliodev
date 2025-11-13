import Image from "next/image";

export const Certificats = () => {
  return (
    <section className="w-full card p-4">
      <h2 className="card--glitch text-center p-2 font-bold text-3xl sm:text-4xl my-8">
        Certificates:
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
        <Image
          src="/dyploms/cod.png"
          alt="coderslab"
          width={300}
          height={200}
        />
        <Image
          src="/dyploms/charp.png"
          alt="C#"
          width={300}
          height={200}
        />
        <Image
          src="/dyploms/ts.avif"
          alt="typescript"
          width={300}
          height={200}
        />
        <Image
          src="/dyploms/js.avif"
          alt="JavaScript"
          width={300}
          height={200}
        />
        <Image
          src="/dyploms/react.avif"
          alt="react"
          width={300}
          height={200}
        />
      </div>
    </section>
  );
};
