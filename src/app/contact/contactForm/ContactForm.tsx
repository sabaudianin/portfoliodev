"use client";
import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ContactFormData } from "@/lib/validation/contactSchema";
import { contactSchema } from "@/lib/validation/contactSchema";

export const ContactForm = () => {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        let message = "Something went wrong. Try again";
        try {
          const json = await response.json();
          if (json?.message) message = json.message;
        } catch { }
        setServerError(message);
        return;
      }
      reset();
    } catch (error) {
      console.log(error);
      setServerError("Network error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card-modern w-full space-y-6"
    >
      <p className="text-center font-doto text-xs tracking-widest uppercase text-foreground/90">
        ..or send a direct message
      </p>

      <div className="space-y-4">
        {/* Name Input */}
        <div className="space-y-1">
          <input
            {...register("name")}
            type="text"
            placeholder="Name..."
            className={`w-full bg-foreground/5 border rounded-2xl p-4 text-center transition-all focus:outline-none focus:border-brand-to ${errors.name ? "border-red-500" : "border-foreground/10"
              }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs text-center">{errors.name.message}</p>
          )}
        </div>

        {/* Email Input */}
        <div className="space-y-1">
          <input
            {...register("email")}
            placeholder="Email..."
            className={`w-full bg-foreground/5 border rounded-2xl p-4 text-center transition-all focus:outline-none focus:border-brand-to ${errors.email ? "border-red-500" : "border-foreground/10"
              }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs text-center">{errors.email.message}</p>
          )}
        </div>

        {/* Message Textarea */}
        <div className="space-y-1">
          <textarea
            {...register("message")}
            placeholder="Write your message here.."
            rows={5}
            className={`w-full bg-foreground/5 border rounded-2xl p-4 resize-none transition-all focus:outline-none focus:border-brand-to ${errors.message ? "border-red-500" : "border-foreground/10"
              }`}
          />
          {errors.message && (
            <p className="text-red-500 text-xs text-center">{errors.message.message}</p>
          )}
        </div>
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input {...register("honeypot")} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="text-center space-y-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full md:w-auto min-w-[200px]"
        >
          {isSubmitting ? "Sending..." : "Submit Message"}
        </button>

        {serverError && <p className="text-red-400 text-sm">{serverError}</p>}
        {isSubmitSuccessful && !serverError && (
          <p className="text-green-500 text-sm font-bold">Message sent successfully!</p>
        )}

        <p className="text-[10px] text-foreground/40 uppercase tracking-widest">
          By submitting, you agree to the{" "}
          <Link href="/privacy" className="underline hover:text-brand-to">
            Privacy Policy
          </Link>
        </p>
      </div>
    </form>
  );
};