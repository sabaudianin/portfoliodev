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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("name")}
          placeholder="Name"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <input
          {...register("email")}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <textarea
          {...register("message")}
          placeholder="Write your message"
        />
        {errors.message && <p>{errors.message.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
