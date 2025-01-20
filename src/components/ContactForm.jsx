import React, { useRef } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2gnqpji", // Replace with your EmailJS service ID
        "template_u0pz4uc", // Replace with your EmailJS template ID
        form.current,
        "-YI9gtyMonMW4acLf" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
        },
        (error) => {
          alert("An error occurred, please try again.");
        }
      );
    e.target.reset(); // Reset form fields
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-gray-100 rounded-lg shadow-md p-6 space-y-4 w-full max-w-lg mx-auto"
    >
      <input
        type="text"
        name="from_name"
        placeholder="Name"
        className="bg-white w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
        required
      />
      <input
        type="email"
        name="reply_to"
        placeholder="Email"
        className="bg-white w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="bg-white w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
        required
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Message"
        className="bg-white w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
