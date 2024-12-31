import React from "react";

function ContactForm() {
  return (
    <div className=" p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-textcolor text-lg font-bold mb-4">Contact Form</h2>
      <form className="space-y-4">
        {/* Full Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded-md bg-background text-textcolor border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md bg-background text-textcolor border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Message */}
        <textarea
          placeholder="Message"
          rows="5"
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
