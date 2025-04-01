import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email adress"),
  message: z
    .string()
    .min(10, "Message have to be at lest 10 characters")
    .max(500, "Maximum 500 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
