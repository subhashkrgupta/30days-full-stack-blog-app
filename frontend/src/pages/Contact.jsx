import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    // Updated container background and text for dark mode
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8 mt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Have a question about a post or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information Sidebar */}
          <div className="bg-indigo-700 dark:bg-indigo-900 rounded-2xl p-8 text-white shadow-xl lg:col-span-1 border border-transparent dark:border-indigo-500/20">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-indigo-100 dark:text-indigo-200 mb-8">
              Fill out the form and I will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-indigo-300 dark:text-indigo-400" />
                <span className="dark:text-gray-100">hello@yourblog.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-indigo-300 dark:text-indigo-400" />
                <span className="dark:text-gray-100">+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-indigo-300 dark:text-indigo-400" />
                <span className="dark:text-gray-100">Ranchi, Jharkhand, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex space-x-4">
              <div className="w-10 h-10 bg-indigo-600 dark:bg-indigo-800 rounded-full flex items-center justify-center hover:bg-indigo-500 dark:hover:bg-indigo-700 cursor-pointer transition">
                <span className="text-xs">Tw</span>
              </div>
              <div className="w-10 h-10 bg-indigo-600 dark:bg-indigo-800 rounded-full flex items-center justify-center hover:bg-indigo-500 dark:hover:bg-indigo-700 cursor-pointer transition">
                <span className="text-xs">Gh</span>
              </div>
              <div className="w-10 h-10 bg-indigo-600 dark:bg-indigo-800 rounded-full flex items-center justify-center hover:bg-indigo-500 dark:hover:bg-indigo-700 cursor-pointer transition">
                <span className="text-xs">In</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg lg:col-span-2 border border-gray-100 dark:border-gray-800">
            <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3 bg-gray-50 dark:bg-gray-800 dark:text-white border transition-colors"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3 bg-gray-50 dark:bg-gray-800 dark:text-white border transition-colors"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3 bg-gray-50 dark:bg-gray-800 dark:text-white border transition-colors"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3 bg-gray-50 dark:bg-gray-800 dark:text-white border transition-colors"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3 bg-gray-50 dark:bg-gray-800 dark:text-white border transition-colors"
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:-translate-y-0.5"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;