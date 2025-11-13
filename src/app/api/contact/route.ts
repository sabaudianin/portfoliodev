import { NextResponse } from "next/server";
import { z } from "zod";
import { contactSchema } from "@/lib/validation/contactSchema";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    //serwerowa validacja - nie ufać frontowi NIGDY !

    const data = contactSchema.parse(body);
    console.log("new contact data", data);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log("contact api error", error);

    //bledy validacji ZOD

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Invalid input", issues: error.flatten() },
        { status: 400 }
      );
    }

    //ogólny bład servera
    return NextResponse.json(
      { success: false, message: "internal server error,try again" },
      { status: 500 }
    );
  }
}
