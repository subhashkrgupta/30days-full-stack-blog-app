import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { blogs } from "../services/blogs";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return (
    <div className="pt-32 text-center min-h-screen bg-white dark:bg-[#0f172a] dark:text-white">
      Post not found.
    </div>
  );

  return (
    // Container transitions smoothly between light (bg-white) and dark (bg-[#0f172a])
    <div className="min-h-screen bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white pt-32 pb-20 transition-colors duration-300">
      <article className="max-w-4xl mx-auto px-6">
        
        {/* Navigation Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-8 hover:underline font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        {/* Header Section */}
        <header className="space-y-6 mb-12">
          <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-1.5 rounded-full text-sm font-bold">
            {blog.category}
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-gray-900 dark:text-white">
            {blog.title}
          </h1>
          
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-indigo-500" /> Admin
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-500" /> {blog.readTime}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-500" /> March 2026
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Summary / Description */}
          <p className="text-xl leading-relaxed mb-6 italic text-gray-600 dark:text-gray-300">
            {blog.desc}
          </p>
          
          {/* Main Content Placeholders */}
          <p className="text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
            The core concepts
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          {/* Highlighted Quote Box */}
          <div className="my-10 p-8 bg-gray-50 dark:bg-gray-800/50 rounded-3xl border-l-4 border-indigo-600 shadow-sm transition-colors">
            <p className="text-gray-800 dark:text-gray-200 font-medium italic">
               "The best way to predict the future is to create it." — Industry Expert
            </p>
          </div>

          <p className="text-gray-700 dark:text-gray-300">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;