"use client";
import React from "react";
import Link from "next/link";
import type { JSX } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ContactFormData } from "@/lib/validation/contactSchema";
import { contactSchema } from "@/lib/validation/contactSchema";

export const ContactForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setServerError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        //robimy falback jesli by sie nie udało odczytac widomosci z servera
        let message = "Something went wrong.Try again";
        try {
          const json = await response.json();
          if (json?.message) {
            message = json.message;
          }
        } catch {}
        setServerError(message);
        return;
      }
      //jak sie udało to czyscimy forma
      reset();
    } catch (error) {
      console.log("Contact Form submit - error", error);
      setServerError("Network errror");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-2 px-4 py-6 border rounded border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
    >
      ..or you can sen directly message.
      <div className="pt-4">
        <input
          {...register("name")}
          type="text"
          placeholder="Name..."
          title="Nice to meet You."
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          autoComplete="name"
          className="w-full border rounded text-center p-2 border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
        />
        {errors.name && (
          <p
            id="name-error"
            className="text-red-500 text-xs p-1"
          >
            {errors.name.message}
          </p>
        )}
      </div>
      <div>
        <input
          {...register("email")}
          placeholder="Email..."
          title="We'll never share your email."
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full border rounded text-center p-2 border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
          autoComplete="email"
        />
        {errors.email && (
          <p
            id="email-error"
            className="text-red-500 text-xs"
          >
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="py-4">
        <label
          htmlFor="message"
          className="sr-only"
        >
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          placeholder="Write your message here.."
          className="w-full flex items-center resize-none border rounded text-left border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)] p-2"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p
            id="message-error"
            className="w-full text-red-500 text-xs text-center whitespace-normal break-words  p-1"
          >
            {errors.message.message}
          </p>
        )}
      </div>
      {/* Honeypot – anti-spam */}
      <div
        className="hidden"
        aria-hidden="true"
      >
        <label htmlFor="honeypot">
          If you are human, leave this field empty!
        </label>
        <input
          id="honeypot"
          {...register("honeypot")}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-2 border rounded-xl bg-[var(--primary-from)] shadow-[0_0_12px_rgba(6,182,212,0.6)] hover:scale-105 "
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
      {serverError && (
        <p className="text-red-400 text-sm pt-2">{serverError}</p>
      )}
      {isSubmitSuccessful && !serverError && (
        <p className="text-green-500 text-sm">Message sent successfully!</p>
      )}
      <p className="text-xs">
        Submitting this form means you agree to the{" "}
        <Link
          href="/privacy"
          className="underline font-semibold"
        >
          Privacy Policy.
        </Link>{" "}
      </p>
    </form>
  );
};
