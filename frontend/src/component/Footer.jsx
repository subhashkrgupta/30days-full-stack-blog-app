import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail, MapPin, Send } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "#" },
    { name: "Contact", path: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              MyBlog<span className="text-indigo-500">.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering developers with high-quality tutorials, career advice,
              and industry trends. Join our community to master the modern web.
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 bg-gray-800 p-2 rounded-full hover:bg-indigo-600"
              >
                <Github size={20} />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300 bg-gray-800 p-2 rounded-full hover:bg-blue-400"
              >
                <Twitter size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/01subhashkumar/"
                className="text-gray-400 hover:text-white transition-colors duration-300 bg-gray-800 p-2 rounded-full hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Categories
            </h3>

            <ul className="space-y-3">
              {[
                "Frontend Development",
                "Backend Systems",
                "UI/UX Design",
                "DevOps & Cloud",
                "Career Growth",
              ].map((item) => (
                <li key={item}>
                  {/* Link use karein aur state mein category pass karein */}
                  <Link
                    to="/blog"
                    state={{ filterCategory: item }}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Stay Updated
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and tech news.
            </p>

            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm border border-gray-700"
              />

              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition duration-300 flex items-center justify-center gap-2 text-sm"
              >
                Subscribe <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>
            <p>© {currentYear} MyBlog. All rights reserved.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-indigo-500" />
              <span>hello@myblog.com</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-indigo-500" />
              <span>Ranchi, Jharkhand</span>
            </div>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
