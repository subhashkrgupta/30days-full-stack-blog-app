import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User, Loader2 } from "lucide-react";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams(); // URL se ID nikalne ke liye
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        // API call: check karein ki aapka backend endpoint yahi hai
        const res = await axios.get(`/api/v1/blogs/${id}`, { withCredentials: true });
        
        // Agar response structure alag ho toh use adjust karein
        setBlog(res.data?.blog || res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Blog content load nahi ho paya.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0f172a]">
      <Loader2 className="w-10 h-10 animate-spin text-indigo-600 mb-4" />
      <p className="dark:text-white">Loading post...</p>
    </div>
  );

  if (error || !blog) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0f172a] px-6 text-center">
      <h2 className="text-2xl font-bold text-red-500 mb-4">{error || "Post Not Found"}</h2>
      <Link to="/blog" className="text-indigo-600 hover:underline flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" /> Back to Blog List
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white pt-32 pb-20 transition-colors duration-300">
      <article className="max-w-4xl mx-auto px-6">
        
        {/* Navigation Link */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-8 hover:underline font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        
        {/* Header Section */}
        <header className="space-y-6 mb-12">
          <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-1.5 rounded-full text-sm font-bold capitalize">
            {blog.category}
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-gray-900 dark:text-white">
            {blog.title}
          </h1>
          
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-indigo-500" /> {blog.author?.userName || "Author"}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-500" /> 
              {Math.max(1, Math.ceil((blog.content || "").split(/\s+/).length / 200))} min read
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-500" /> 
              {new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Summary / Description if available */}
          {blog.description && (
            <p className="text-xl leading-relaxed mb-6 italic text-gray-600 dark:text-gray-300">
              {blog.description}
            </p>
          )}
          
          {/* Database Content Rendering */}
          <div 
            className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />

          {/* Quote Section Example */}
          <div className="my-10 p-8 bg-gray-50 dark:bg-gray-800/50 rounded-3xl border-l-4 border-indigo-600 shadow-sm transition-colors">
            <p className="text-gray-800 dark:text-gray-200 font-medium italic">
               "Great posts come from consistent building." — Developer Blog 2026
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;