import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type EnquiryData = {
  name: string;
  email: string;
  company: string;
  message: string;
  partnerType: string; // Include new field
};

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message, partnerType }: EnquiryData = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chvamshi03@gmail.com",
        pass: "zfie hmte iyxt wyto",
      },
    });

    const mailOptions = {
      from: "Digitech<chvamshi03@gmail.com>",
      to: "tarannum.s@tasconmedia.com, info@tasconmedia.com, digital.maxpo@gmail.com, praveen.maxpo@gmail.com, askarali.maxpo@gmail.com",
      
      subject: "New Partnership Enquiry",
      text: `
New Partnership Enquiry Received:

Name: ${name}
Email: ${email}
Company: ${company}
Type of Partner: ${partnerType}
Message: ${message}
      `.trim(),
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
