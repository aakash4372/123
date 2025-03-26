import React from 'react';

const ContactSection = () => {
  return (
    <div className="section bg-green-600">
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full px-4 py-2 border rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;