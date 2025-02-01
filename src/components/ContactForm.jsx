import React, { useRef } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2gnqpji",
        "template_u0pz4uc",
        form.current,
        "-YI9gtyMonMW4acLf"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
        },
        (error) => {
          alert("An error occurred, please try again.");
        }
      );
    e.target.reset();
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-blue-900/30 backdrop-blur-sm rounded-lg shadow-lg p-6 space-y-4 w-full max-w-lg mx-auto border border-blue-500/30"
    >
      <input
        type="text"
        name="from_name"
        placeholder="Name"
        className="w-full p-3 rounded bg-blue-800/30 text-white placeholder-blue-300 border border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        required
      />
      <input
        type="email"
        name="reply_to"
        placeholder="Email"
        className="w-full p-3 rounded bg-blue-800/30 text-white placeholder-blue-300 border border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="w-full p-3 rounded bg-blue-800/30 text-white placeholder-blue-300 border border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        required
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Message"
        className="w-full p-3 rounded bg-blue-800/30 text-white placeholder-blue-300 border border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;