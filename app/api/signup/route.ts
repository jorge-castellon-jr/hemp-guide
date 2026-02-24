import { NextResponse } from "next/server";

export interface SignupBody {
  name: string;
  email: string;
}

const isNotValidString = (value: any): boolean => {
  return !value || typeof value !== "string" || !value.trim();
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SignupBody;
    const { name, email } = body;

    if (isNotValidString(name)) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (isNotValidString(email)) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // TODO: Add your email/API logic here, e.g.:
    // - Send to Resend, SendGrid, Mailchimp, etc.
    // - Save to database
    // - Forward to a third-party API
    // Use: { name: (name ?? "").trim(), email: email.trim() }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }
}
