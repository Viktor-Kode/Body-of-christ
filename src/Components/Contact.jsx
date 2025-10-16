import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate success (you can integrate with EmailJS, Formspree, etc.)
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSuccess(false), 3000);
  };

  const whatsappNumber = "2348012345678"; // Replace with your WhatsApp number
  const whatsappMessage = "Hello, I would like to get in touch with the Ministry.";

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Get in <span className="text-blue-600">Touch</span>
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Have a question, testimony, or request? Send us a message—we’d love to hear from you.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md space-y-6"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {/* Success Message */}
          {success && (
            <p className="text-green-600 text-center mt-4">
              ✅ Thank you! Your message has been sent.
            </p>
          )}
        </form>

        {/* WhatsApp Button */}
        <div className="text-center mt-10">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
