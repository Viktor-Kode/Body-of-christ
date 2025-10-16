import React, { useState } from "react";

const faqs = [
  {
    question: "What is the mission of Body of Christ Ministry?",
    answer:
      "Our mission is to share the truth of the Gospel with love, clarity, and passion, equipping believers to defend their faith.",
  },
  {
    question: "How can I attend your events?",
    answer:
      "Visit the Events section of our website for upcoming programs. You can also connect with us on WhatsApp or social media for updates.",
  },
  {
    question: "Do you offer online teachings?",
    answer:
      "Yes, our teachings are available on YouTube and through our social media platforms. You can also find resources in the Teachings section.",
  },
  {
    question: "How can I support the ministry?",
    answer:
      "You can support by praying for us, sharing our content, and giving through our bank account (see the Donation section).",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-100 focus:outline-none"
              >
                {faq.question}
                <span className="text-blue-600">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
