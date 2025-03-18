import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // State to track form submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create the FormData object for FormSubmit API
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("message", formData.message);
    form.append("_next", "http://yourdomain.com/thank-you"); // Add the next URL for redirection after submission

    try {
      // Send data to FormSubmit API
      const response = await fetch("https://formsubmit.co/vedanttech40@gmail.com", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        // Set form submitted state to true to show the success message
        setIsFormSubmitted(true);

        // Reset form fields after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      // Handle any errors that occur during the fetch request
      alert("Error submitting the form. Please try again.");
    }
  };

  return (
    <div id="contact" className="flex bg-[#ecf8f8] pt-20 justify-center items-center min-h-screen p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Fill out the form, and we'll get back to you shortly.
        </p>

        {isFormSubmitted ? (
          // Show success message after form submission
          <div className="text-center text-green-600 font-semibold">
            Our expert will reach you soon!
          </div>
        ) : (
          // Show the form before submission
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 9876543210"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Message ✉️
            </button>
          </form>
        )}

        <p className="text-center text-gray-500 text-sm mt-4">
          By submitting this form, you agree to our{" "}
          <a href="#" className="text-blue-600 underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>..
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
