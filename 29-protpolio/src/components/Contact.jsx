import React, { useState } from 'react';
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaUser, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setShowPopup(false), 7000);
  };
  const contacts = [
    {
      id: 1,
      icon: <FaEnvelope />,
      title: "Email",
      text: "bacha141998@gmail.com",
      color: "text-[#0ea5e9]",
      bg: "bg-[#0ea5e9]/10",
    },
    {
      id: 2,
      icon: <FaMapMarkerAlt />,
      title: "Location",
      text: "Lahore, Pakistan",
      color: "text-[#f97316]",
      bg: "bg-[#f97316]/10",
    },
    {
      id: 3,
      icon: <FaPhoneAlt />,
      title: "Phone",
      text: "+92 3101773357\n+92 3420797484",
      color: "text-[#14b8a6]",
      bg: "bg-[#14b8a6]/10",
    },
    {
      id: 4,
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      text: "+92 3101773357",
      color: "text-[#25D366]",
      bg: "bg-[#25D366]/10",
    },
  ];
  return (
    <section id="contact" className="py-20 bg-base-100">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary">Get In Touch</h2>
          <div className="h-1 w-40 bg-accent mx-auto rounded-full"></div>
          <p className="text-base-content/70 max-w-2xl mx-auto mt-3">
            Have a project in mind or just want to say hi? <br /> Feel free to reach out. I'm always open to discussing new opportunities and creative ideas.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="flex-1 space-y-8">
            <div className="flex-1 space-y-8">
              <h3 className="text-2xl font-bold text-primary ml-10">Contact Information</h3>
              <div className="space-y-6 mt-6 ml-10">
                {contacts.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${item.bg} ${item.color} flex items-center justify-center`}>
                      {React.cloneElement(item.icon, { className: "h-6 w-6" })}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">{item.title}</h4>
                      <p className="text-base-content/70 whitespace-pre-line">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md sm:max-w-lg bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">
                Contact Me
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm text-gray-300">Name</label>
                  <div className="relative mt-1">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-300">Email</label>
                  <div className="relative mt-1">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-300">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm sm:text-base"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold text-sm sm:text-base"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
              {showPopup && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-2xl p-4">
                  <div className="bg-gray-900 p-6 rounded-xl text-center">
                    <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-3" />
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      Your message has been sent ✅
                    </h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
