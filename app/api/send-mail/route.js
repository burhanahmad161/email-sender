import nodemailer from 'nodemailer';
import emailTemplate from '@/app/emailTemplate';

export async function POST(req) {
  try {
    const { recipientName, amount, senderName, recipientEmail, memo } = await req.json();
    console.log("Data in API function is:", recipientEmail, amount, senderName, recipientName, memo);

    // const transporter = nodemailer.createTransport({
    //   service: "gmail", // You can use any other email provider
    //   auth: {
    //     user: process.env.ZOHO_EMAIL, // Your email address
    //     pass: process.env.ZOHO_PASSWORD, // App password from your email provider
    //   },
    // });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sterniz469@gmail.com",
        pass: "pkqa tdfx kqzi hrds ",
      },
    });


    console.log("Nodemailer transporter initialized");
    const mailName = "Chime";
    // Email content
    const mailOptions = {
      from: `${mailName} <alerts@chimeuae.com>`, // Sender name and email
      to: recipientEmail, // Recipient email
      subject: `${senderName} just sent you money 💸.`,
      text: "The funds are in your Chime® Checking Account and available to use right away.",
      html: emailTemplate(recipientName, amount, senderName, memo), // HTML body
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}