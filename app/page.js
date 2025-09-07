"use client";
import { useState } from "react";
import PreviewEmailTemplate from "./preview";

export default function Home() {
  const [formData, setFormData] = useState({
    recipientName: "",
    amount: "",
    senderName: "",
    recipientEmail: "",
    memo: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setMessage(data.message || data.error);
      setError(data.error || "");
      if (!data.error) {
        setFormData({
          recipientName: "",
          amount: "",
          senderName: "",
          recipientEmail: "",
          memo: "",
        });
      }
    } catch (error) {
      setError("Failed to send email.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-lg bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 transform transition-all hover:scale-[1.02] duration-300">
        <h1 className="text-3xl font-extrabold text-blue-300 mb-8 text-center tracking-tight">
          Payment Notification Sender
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label htmlFor="recipientName" className="block text-sm font-medium text-gray-300 mb-1">
              Recipient Name
            </label>
            <input
              type="text"
              name="recipientName"
              id="recipientName"
              value={formData.recipientName}
              onChange={handleInputChange}
              className="block w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 placeholder-gray-400"
              placeholder="Enter recipient name"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-1">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className="block w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 placeholder-gray-400"
              placeholder="Enter amount"
              min="0"
              step="0.01"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="senderName" className="block text-sm font-medium text-gray-300 mb-1">
              Sender Name
            </label>
            <input
              type="text"
              name="senderName"
              id="senderName"
              value={formData.senderName}
              onChange={handleInputChange}
              className="block w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 placeholder-gray-400"
              placeholder="Enter sender name"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="recipientEmail" className="block text-sm font-medium text-gray-300 mb-1">
              Recipient Email
            </label>
            <input
              type="email"
              name="recipientEmail"
              id="recipientEmail"
              value={formData.recipientEmail}
              onChange={handleInputChange}
              className="block w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 placeholder-gray-400"
              placeholder="Enter recipient email"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="memo" className="block text-sm font-medium text-gray-300 mb-1">
              Memo
            </label>
            <input
              type="text"
              name="memo"
              id="memo"
              value={formData.memo}
              onChange={handleInputChange}
              className="block w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 placeholder-gray-400"
              placeholder="Enter a memo"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-900/20 p-3 rounded-lg flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </p>
          )}
          {message && (
            <p className="text-green-400 text-sm bg-green-900/20 p-3 rounded-lg flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Email"
            )}
          </button>
        </form>
      </div>
    </div>
    // <PreviewEmailTemplate recipientName="Burhan" amount={100} senderName="Alice" memo="Payment for services" />
  );
}