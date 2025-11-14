import { NextResponse } from "next/server";
import { z } from "zod";
import { contactSchema } from "@/lib/validation/contactSchema";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rateLimits/rateLimit";

export const runtime = "nodejs";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL;
const RESEND_TO_EMAIL = process.env.RESEND_TO_EMAIL as string;

export async function POST(req: Request) {
  console.log("LOGS API POST LOGS LOGS LOGS");

  //rate limiting first
  const { limited, ip } = checkRateLimit(req);
  if (limited) {
    console.warn("Rate Limited exceed for this IP", ip);
    return NextResponse.json(
      {
        success: false,
        message: "Too many request.Please try again later",
      },
      {
        status: 429,
      }
    );
  }

  try {
    const body = await req.json();

    //honeypot check bot zapleni ,czlowiek nie
    if (typeof body.honeypot === "string" && body.honeypot.trim().length > 0) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // zwracamy 200 ale nic sie nie dzieje ,bot oszukany
      return NextResponse.json({ success: true }, { status: 200 });
    }

    //Prawdziwa serwerowa validacja dla nie botów  - nie ufać frontowi NIGDY !
    const data = contactSchema.parse(body);
    console.log("new contact data", data);

    //oszukuje typescripta lokalnymi zmiennymi dla resenda
    const apiKey = RESEND_API_KEY;
    const fromEmail = RESEND_FROM_EMAIL;
    const toEmail = RESEND_TO_EMAIL;

    if (!apiKey || !fromEmail || !toEmail) {
      console.error("Resend env mising");
      return NextResponse.json(
        {
          success: false,
          message: "Email services ins not configured.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    //wysylka emaila
    const { data: emailData, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `New message from ${data.name}`,
      text: [
        `Name:${data.name}`,
        `Email:${data.email}`,
        "",
        "Message:",
        data.message,
      ].join("\n"),
      html: `
        <h2>Contact form msg:</h2>
        <p>Name - ${data.name}</p>
        <p>Email - ${data.email}</p>
        <p>Message - ${data.message.replace(/\n/g, "</br>")}
        `,
    });
    if (error) {
      console.error("Resend error", error);
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send mail.Try again later",
        },
        { status: 500 }
      );
    }
    console.log("Email sent", emailData);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact api error", error);

    //bledy validacji ZOD

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Invalid input", issues: error.flatten() },
        { status: 400 }
      );
    }

    //ogólny bład servera
    return NextResponse.json(
      { success: false, message: "Internal server error,try again" },
      { status: 500 }
    );
  }
}
