import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { validateContactForm } from "@/lib/validations/contact";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Validate
    const errors = validateContactForm({ name, email, phone, message });
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    // Build transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Pavocard Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL ?? process.env.SMTP_USER,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #008236;">New Contact Message — Pavocard</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; width: 120px;">Name</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${
              phone
                ? `<tr>
              <td style="padding: 8px 0; font-weight: 600;">Phone</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding: 8px 0; font-weight: 600; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route]", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
