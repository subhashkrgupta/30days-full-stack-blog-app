import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] text-gray-900 dark:text-gray-300 pt-32 pb-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-8 hover:underline font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="w-10 h-10 text-indigo-600" />
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            Privacy Policy
          </h1>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mb-10 pb-6 border-b border-gray-200 dark:border-gray-800">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        {/* Content Section */}
        <div className="space-y-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Information We Collect</h2>
            <p>
              Welcome to MyBlog. We respect your privacy and are committed to protecting your personal data. We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, post a comment, or contact us. This may include your name, email address, and profile details.
            </p>
            <p className="mt-4">
              We also automatically collect certain information about your device and how you interact with our blog, including IP addresses, browser types, and pages visited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600 dark:text-gray-400">
              <li>Provide, operate, and maintain our blog and services.</li>
              <li>Improve, personalize, and expand our content and user experience.</li>
              <li>Communicate with you, including sending newsletters and updates (if you've opted in).</li>
              <li>Monitor and analyze trends, usage, and activities to improve our platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our blog and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Data Security</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="font-semibold mt-2 text-indigo-600 dark:text-indigo-400">hello@myblog.com</p>
          </section>
        </div>
        
      </div>
    </div>
  );
};

export default PrivacyPolicy;