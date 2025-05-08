import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Heading */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get in Touch</h1>
        <p className="text-gray-600 text-lg">
          Have a question, suggestion, or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-2">Contact Information</h2>
            <p className="text-gray-600">Feel free to reach out to us directly through the details below.</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Email:</p>
            <p className="text-gray-600">support@forestveda.com</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Phone:</p>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div>
            <p className="text-gray-700 font-medium">Address:</p>
            <p className="text-gray-600">
              Forest Veda Ayurveda Center<br />
              123 Green Way, Wellness City,<br />
              India, India – 678901
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
