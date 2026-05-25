import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { sendMail } from "@/lib/mail";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { name, email, message } = parsed.data;

    await sendMail({ name, email, message });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
