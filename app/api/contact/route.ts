import nodemailer from 'nodemailer';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      console.error('Validation failed: Missing required fields');
      return new Response(
        JSON.stringify({ message: 'All fields are required' }),
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    console.log('Using email:', emailUser);
    console.log('Setting up the transporter...');

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    console.log('Transporter created:', transporter);

    console.log('Sending email...');
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'kaztech069@gmail.com', // Your email address
      subject: 'New Contact Message',
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });

    console.log('Email sent successfully:', info);
    return new Response(
      JSON.stringify({ message: 'Email sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in sending email:', error);  // More detailed logging
    return new Response(
      JSON.stringify({ message: 'Failed to send email.' }),
      { status: 500 }
    );
  }
}
