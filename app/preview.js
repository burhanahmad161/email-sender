"use client";
import { useState, useEffect } from "react";
import emailTemplate from "@/app/emailTemplate";

export default function PreviewEmailTemplate() {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    // Sample data to render the template
    const sampleRecipientName = "Maha";
    const sampleAmount = "30.00";
    const sampleSenderName = "Rosa P.";
    const renderedTemplate = emailTemplate(sampleRecipientName, sampleAmount, sampleSenderName);
    setHtmlContent(renderedTemplate);
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Email Template Preview</h1>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        style={{ border: "1px solid #ccc", padding: "10px" }}
      />
    </div>
  );
}