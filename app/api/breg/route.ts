import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const {
      name,
      designation,
      email,
      country,
      phone,
      interestedIn,
      message,
    } = await req.json()

    if (!name || !designation || !email || !country || !phone || !interestedIn || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chvamshi03@gmail.com",
        pass: "zfie hmte iyxt wyto", // 🔐 Store this in .env in production!
      },
    })

    const mailOptions = {
      from: "Digitech<chvamshi03@gmail.com>",
      to: "digital.maxpo@gmail.com, tarannum.s@tasconmedia.com, praveen.maxpo@gmail.com",
      subject: "New Brochure & Agenda Request",
      text: `
New Brochure Request:

Name: ${name}
Designation: ${designation}
Email: ${email}
Country: ${country}
Phone No: ${phone}
Interested In: ${interestedIn}
Message: ${message}
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Brochure request sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Error sending brochure request" }, { status: 500 })
  }
}
