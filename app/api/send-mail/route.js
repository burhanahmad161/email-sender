import emailTemplate from "@/app/emailTemplate";

export async function POST(req) {
  const nodemailer = (await import("nodemailer")).default;

  try {
    const { recipientName, amount, senderName, recipientEmail } = await req.json();
    console.log("Data in API function is:", recipientEmail, amount, senderName, recipientName);

    // Create transporter for Titan Mail
    const transporter = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 465, // or 587
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER, // must be alerts@chimeuae.com
        pass: process.env.EMAIL_PASS, // Titan mailbox password
      },
    });

    console.log("Transporter created");

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER, // must match authenticated user
      to: recipientEmail, // send to Gmail
      subject: `You just got paid! $${amount} from ${senderName}`,
      html: emailTemplate(recipientName, amount, senderName),
    };

    console.log("Mail options created:", mailOptions);

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
