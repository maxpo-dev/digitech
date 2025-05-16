import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      designation,
      company,
      email,
      phone,
      country,
      interestedIn,
      message,
      termsAccepted,
      marketingConsent,
    } = body;

    // Validate required fields
    if (!name || !email || !interestedIn || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: 'Invalid email format' }, { status: 400 });
    }

    // Save to MongoDB using native driver
    const client = await new MongoClient(process.env.MONGODB_URI as string).connect();
    const db = client.db(); // uses DB name in connection string
    const collection = db.collection('contacts');

    await collection.insertOne({
      name,
      designation: designation || null,
      company: company || null,
      email,
      phone: phone || null,
      country: country || null,
      interestedIn,
      message,
      termsAccepted: Boolean(termsAccepted),
      marketingConsent: Boolean(marketingConsent),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Send email with Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL || 'Digitech <chvamshi03@gmail.com>',
      to: process.env.SMTP_USER, // send to your own inbox
      bcc: process.env.SMTP_TO_EMAIL?.split(',').map(email => email.trim()), // blind copy others
      subject: 'New Enquiry from DIGITECH Contact Form',
      html: `
        <h1>New Enquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Designation:</strong> ${designation || 'N/A'}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Country:</strong> ${country || 'N/A'}</p>
        <p><strong>Interested In:</strong> ${interestedIn}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Terms Accepted:</strong> ${termsAccepted ? 'Yes' : 'No'}</p>
        <p><strong>Marketing Consent:</strong> ${marketingConsent ? 'Yes' : 'No'}</p>
      `,
    });

    return NextResponse.json({ message: 'Enquiry submitted and email sent' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Failed to submit enquiry or send email' }, { status: 500 });
  }
}
