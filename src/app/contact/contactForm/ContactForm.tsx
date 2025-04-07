"use client";
import React from "react";
import { JSX } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, contactSchema } from "@/lib/validation/contactSchema";

export const ContactForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    console.log(data);
    reset();
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full sm:w-1/3 space-y-2 p-2 border rounded border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
    >
      ..or you can sen directly message.
      <div className="pt-4">
        <input
          {...register("name")}
          placeholder="Name..."
          title="Nice to meet You."
          className="w-full border rounded text-center border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
        />
        {errors.name && (
          <p className="text-red-500 text-xs">{errors.name.message}</p>
        )}
      </div>
      <div>
        <input
          {...register("email")}
          placeholder="Email..."
          title="We'll never share your email."
          className="w-full border rounded text-center border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}
      </div>
      <div>
        <textarea
          {...register("message")}
          placeholder="Write your message here.."
          className="w-full resize-none border rounded text-center border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
          rows={5}
        />
        {errors.message && (
          <p className="text-red-500 text-xs whitespace-normal break-words max-w-sm">
            {errors.message.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className=" p-2 border rounded bg-cyan-500  shadow-[0_0_12px_rgba(6,182,212,0.6)] hover:scale-105"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
      {isSubmitSuccessful && (
        <p className="text-green-500 text-sm">Message sent successfully!</p>
      )}
    </form>
  );
};
