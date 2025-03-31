import { FaPhone, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <section className="w-full text-center p-4 bg-gradient-to-l from-blue-400 to-cyan-400 shadow-lg text-black text-xs">
      <div className="">
        <div className="flex items-center justify-center gap-2">
          <FaPhone className="text-bold " /> +48 793386445
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaEnvelope className=" " />
          rafbobbob@gmail.com
        </div>
      </div>
    </section>
  );
};
