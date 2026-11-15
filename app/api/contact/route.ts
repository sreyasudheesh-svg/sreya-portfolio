import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxMessageLength = 5000;

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit a valid form." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Please submit a valid form." }, { status: 400 });
  }

  const { name, email, message } = payload as Record<string, unknown>;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    name.trim().length < 2 ||
    name.trim().length > 100 ||
    email.trim().length > 254 ||
    !emailPattern.test(email.trim()) ||
    message.trim().length < 10 ||
    message.trim().length > maxMessageLength
  ) {
    return NextResponse.json({ error: "Enter a valid name, email, and message (10–5,000 characters)." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    return NextResponse.json({ error: "Email service is not configured yet. Please email me directly." }, { status: 503 });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: ["sreyasudheesh14@gmail.com"],
        reply_to: email.trim(),
        subject: `Portfolio message from ${name.trim()}`,
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected a portfolio contact message with status:", response.status);
      return NextResponse.json({ error: "Your message could not be sent right now. Please try again later." }, { status: 502 });
    }

    return NextResponse.json({ message: "Thanks for reaching out. Your message has been sent." }, { status: 200 });
  } catch (error) {
    console.error("Failed to send a portfolio contact message:", error);
    return NextResponse.json({ error: "Your message could not be sent right now. Please try again later." }, { status: 502 });
  }
}
