"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, contactSchema } from "@/lib/validation/contactSchema";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 px-2 border rounded border-cyan-500 shadow-blue-md"
    >
      <div className="pt-4">
        <input
          {...register("name")}
          placeholder="Name..."
          className="border rounded text-center border-cyan-500 shadow-cyan-lg"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <input
          {...register("email")}
          placeholder="Email..."
          className="shadow-cyan-glow"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <textarea
          {...register("message")}
          placeholder="Write your message"
          className="shadow-xl"
        />
        {errors.message && (
          <p className="text-red-500 text-xs whitespace-normal break-words max-w-sm">
            {errors.message.message}
          </p>
        )}
      </div>
      <button type="submit">Submit</button>
      <div className="shadow-[0_0_12px_rgba(6,182,212,0.6)]">INLINE SHADOW</div>
      <div className="p-4 bg-white rounded shadow-cyan-glow">FORCE TEST</div>
      <div className="shadow-cyan-glow">Glow!</div>
    </form>
  );
};
