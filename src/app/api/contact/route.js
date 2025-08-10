import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false, // disable Next’s JSON parser
  },
};

export async function POST(request) {
  // Parse multipart/form-data
  const formData = await request.formData();

  const name = formData.get("name")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const service = formData.get("service")?.toString() || "";
  const message = formData.get("message")?.toString() || "";
  const role = formData.get("role")?.toString() || "";
  const company = formData.get("company")?.toString() || "";
  const address = formData.get("address")?.toString() || "";
  const hiringPosition = formData.get("hiringPosition")?.toString() || "";

  // Basic validation
  if (!name || !phone || !email || !service || !message || !role) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }
  if (role === "employer" && (!company || !address || !hiringPosition)) {
    return NextResponse.json(
      { error: "Missing employer-specific fields." },
      { status: 400 }
    );
  }

  // Gather file attachments
  const attachments = [];
  for (const file of formData.getAll("attachments")) {
    // file is a File (Web API)
    if (file instanceof File) {
      const arrayBuffer = await file.arrayBuffer();
      attachments.push({
        filename: file.name,
        content: Buffer.from(arrayBuffer),
      });
    }
  }
  console.log('user',process.env.GMAIL_USER)
  console.log('pass',process.env.GMAIL_PASS)

  // Nodemailer transporter (Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Build HTML message
 // Build HTML message
let html = `
  <div style="font-family:Arial, sans-serif; color:#333; line-height:1.5; padding:20px; background:#f5f5f5;">
    <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; overflow:hidden; border:1px solid #e0e0e0;">
      <div style="background:#21745a; padding:20px; text-align:center;">
        <h1 style="color:#ffffff; margin:0; font-size:24px;">New Contact Submission</h1>
      </div>
      <div style="padding:20px;">
        <table cellpadding="8" cellspacing="0" style="width:100%; border-collapse:collapse;">
          <tr style="background:#f0f0f0;">
            <th align="left" style="width:30%; color:#21745a; font-weight:bold;">Name</th>
            <td>${name}</td>
          </tr>
          <tr>
            <th align="left" style="color:#21745a; font-weight:bold;">Phone</th>
            <td>${phone}</td>
          </tr>
          <tr style="background:#f0f0f0;">
            <th align="left" style="color:#21745a; font-weight:bold;">Email</th>
            <td>${email}</td>
          </tr>
          <tr>
            <th align="left" style="color:#21745a; font-weight:bold;">Role</th>
            <td>${role}</td>
          </tr>
          ${role === "employer" ? `
          <tr style="background:#f0f0f0;">
            <th align="left" style="color:#21745a; font-weight:bold;">Company</th>
            <td>${company}</td>
          </tr>
          <tr>
            <th align="left" style="color:#21745a; font-weight:bold;">Address</th>
            <td>${address}</td>
          </tr>
          <tr style="background:#f0f0f0;">
            <th align="left" style="color:#21745a; font-weight:bold;">Position</th>
            <td>${hiringPosition}</td>
          </tr>
          ` : ``}
          <tr>
            <th align="left" style="color:#21745a; font-weight:bold;">Service</th>
            <td>${service}</td>
          </tr>
          <tr style="background:#f0f0f0;">
            <th align="left" style="color:#21745a; font-weight:bold;">Message</th>
            <td>${message.replace(/\n/g, "<br/>")}</td>
          </tr>
        </table>
      </div>
      <div style="background:#fafafa; padding:10px; text-align:center; font-size:12px; color:#888;">
        <p style="margin:0;">This message was generated automatically, please do not reply directly to this email.</p>
      </div>
    </div>
  </div>
`;


  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.GMAIL_USER}>`,
      to: "fahadjawad596@gmail.com",
      subject: `New contact from ${name}`,
      html,
      attachments,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
