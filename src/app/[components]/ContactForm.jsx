"use client";
import React from "react";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto link with the form data
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(`
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `);

    // Create the mailto link with the subject and body
    const mailtoLink = `mailto:youremail@example.com?subject=${subject}&body=${body}`;

    // Open the default email client with the pre-filled information
    window.location.href = mailtoLink;
  };

  return (
    <div className=" p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-textcolor text-lg font-bold mb-4">Contact Form</h2>
      <form className="space-y-4">
        {/* Full Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-md bg-background text-textcolor border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-md bg-background text-textcolor border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Message */}
        <textarea
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-background text-textcolor border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        {/* Submit Button */}
        <button
          type="submit"
          className="px-7 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
