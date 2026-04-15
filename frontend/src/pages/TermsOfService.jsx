import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";

const TermsOfService = () => {
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
          <FileText className="w-10 h-10 text-indigo-600" />
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            Terms of Service
          </h1>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mb-10 pb-6 border-b border-gray-200 dark:border-gray-800">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        {/* Content Section */}
        <div className="space-y-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using MyBlog, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this blog's particular services, such as leaving comments or posting articles, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. User Accounts</h2>
            <p>
              To access certain features of the blog (such as creating posts or saving favorites), you may be required to create an account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. User-Generated Content</h2>
            <p>
              Users may post, upload, or otherwise contribute content to the blog (e.g., comments or community posts). By posting content, you grant MyBlog a non-exclusive, worldwide, royalty-free license to use, reproduce, adapt, publish, and display it.
            </p>
            <p className="mt-4">
              You agree not to post any content that is illegal, abusive, harassing, defamatory, or violates any third-party rights. We reserve the right to remove any content that violates these guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Intellectual Property</h2>
            <p>
              All content published on MyBlog by the site authors, including text, tutorials, graphics, logos, and software, is the property of MyBlog or its content suppliers and is protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Limitation of Liability</h2>
            <p>
              In no event shall MyBlog, nor its directors, employees, partners, agents, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, or other intangible losses, resulting from your access to or use of the blog.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Contact Us</h2>
            <p>If you have any questions regarding these Terms, please contact us at:</p>
            <p className="font-semibold mt-2 text-indigo-600 dark:text-indigo-400">hello@myblog.com</p>
          </section>
        </div>
        
      </div>
    </div>
  );
};

export default TermsOfService;