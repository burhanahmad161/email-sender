"use client";
import { useState } from "react";
import PreviewEmailTemplate from "./preview";

export default function Home() {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Entered Try Function");
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recipientName: "Zaeem Malik", amount: "6", senderName: "Rosa P", recipientEmail: "burhanahmad1616b@gmail.com" }),
      });
      console.log("Response received");
      const data = await res.json();
      setMessage(data.message || data.error);
      setError(data.error ? data.error : "");
    } catch (error) {
      setError("Failed to send email.");
    }
  };

  return (
    <div>
      <h1>Send Payment Notification</h1>
      {/* <PreviewEmailTemplate recipientName="Zaroon Kaleem" amount="6" senderName="Rosa P" recipientEmail="zaroonklm@gmail.com" /> */}
      <button onClick={handleSubmit}>Send Email</button>
    </div>
  );
}