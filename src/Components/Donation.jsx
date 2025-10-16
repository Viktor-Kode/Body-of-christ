import React, { useState } from "react";

const Donation = () => {
  const [copied, setCopied] = useState(false);

  const accountNumber = "1234567890"; // Replace with real account number
  const bankName = "First Bank of Nigeria";
  const accountName = "Body of Christ Go Ye Apologia Ministry";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donation" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Support the <span className="text-blue-600">Ministry</span>
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Your support helps us continue spreading the Gospel through teachings, 
          evangelism, and outreach. Please make your donations via bank transfer only.
        </p>

        {/* Bank Info Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 shadow-sm">
          <p className="text-lg text-gray-700 mb-2">Bank Name:</p>
          <h3 className="text-2xl font-semibold text-gray-900">{bankName}</h3>

          <p className="mt-6 text-lg text-gray-700 mb-2">Account Name:</p>
          <h3 className="text-xl font-medium text-gray-900">{accountName}</h3>

          <p className="mt-6 text-lg text-gray-700 mb-2">Account Number:</p>
          <div className="flex items-center justify-center space-x-3">
            <h3 className="text-3xl font-bold tracking-wider text-blue-700">
              {accountNumber}
            </h3>
            <button
              onClick={copyToClipboard}
              className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        {/* Optional QR */}
        <div className="mt-12">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=1234567890"
            alt="Donation QR Code"
            className="mx-auto w-40 h-40"
          />
          <p className="mt-3 text-gray-500 text-sm">Scan to copy account number</p>
        </div>
      </div>
    </section>
  );
};

export default Donation;
