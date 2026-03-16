import React from "react";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Tag,
  TrendingUp,
  Sparkles,
  Terminal,
  Code2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { blogs } from "../services/blogs";

const Home = () => {

  return (
    // Updated background and text colors for Dark/Light mode
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans pt-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-20">
        
        {/* === UPDATED BLOG HERO SECTION === */}
        <section className="relative overflow-hidden rounded-3xl bg-gray-900 text-white shadow-2xl border border-gray-800">
          {/* Background Gradients */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-indigo-600 opacity-30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-pink-600 opacity-20 blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-6 py-16 md:py-24 md:px-12">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 px-4 py-1.5 rounded-full text-pink-300 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                </span>
                Fresh Perspectives Daily
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Insights for the <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Modern Reader
                </span>
              </h1>

              <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Dive deep into the stories, tutorials, and trends shaping the future of technology and design. Curated content for curious minds.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                  Start Reading <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-gray-800 border border-gray-700 text-gray-300 px-8 py-4 rounded-xl font-bold hover:bg-gray-700 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5" /> Browse Topics
                </button>
              </div>
            </div>

            {/* Right Visual (Abstract "Article" Preview) */}
            <div className="hidden lg:block relative">
              <div className="relative bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500">
                <div className="flex items-center justify-between mb-4 border-b border-gray-700 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-gray-500 font-mono uppercase tracking-widest italic">
                    Trending Now
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-indigo-500/20 rounded"></div>
                  <div className="space-y-2">
                    <div className="h-8 w-full bg-white/10 rounded font-bold px-2 flex items-center text-indigo-300">
                      The Art of Digital Storytelling
                    </div>
                    <div className="h-3 w-full bg-gray-600/30 rounded"></div>
                    <div className="h-3 w-5/6 bg-gray-600/30 rounded"></div>
                    <div className="h-3 w-4/6 bg-gray-600/30 rounded"></div>
                  </div>
                  <div className="pt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-tr from-indigo-500 to-purple-500"></div>
                    <div className="space-y-1">
                      <div className="h-3 w-20 bg-gray-400 rounded"></div>
                      <div className="h-2 w-12 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-indigo-600 p-4 rounded-xl shadow-xl animate-bounce">
                <Sparkles className="w-8 h-8 text-indigo-600 dark:text-white" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Editor's Choice
            </h2>
          </div>

          <div className="group bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden md:flex hover:shadow-2xl transition duration-500 border border-gray-100 dark:border-gray-800">
            <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden bg-gray-200 dark:bg-gray-800">
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
                alt="Featured Content"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
                Must Read
              </div>
            </div>

            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> 15 min read
                </span>
                <span className="w-1 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
                <span>Technology</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                The Shift Towards Minimalist Design in 2026
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                Explore how simplicity is becoming the ultimate sophistication in the digital era and why less is more for the modern user.
              </p>
              <button className="w-fit text-indigo-600 dark:text-indigo-400 font-bold hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center gap-2 transition-all hover:gap-3">
                Read Full Story <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Latest Blogs Grid */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Latest Insights
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link
                to={`/blog`}
                key={blog.id}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm hover:shadow-2xl border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {blog.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 grow leading-relaxed">
                  {blog.desc}
                </p>

                <div className="text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-1 mt-auto group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <Tag className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Explore by Topic
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Node.js",
              "Design",
              "Lifestyle",
              "JavaScript",
              "Productivity",
              "Career",
            ].map((cat, index) => (
              <button
                key={index}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full text-sm font-medium hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white dark:hover:text-white hover:border-indigo-600 transition-colors duration-200 shadow-sm"
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Call To Action */}
        <section className="relative overflow-hidden bg-gray-900 text-white py-16 px-6 rounded-3xl text-center shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-8 text-gray-400 text-lg">
              Join 10,000+ readers and get the best of our blog delivered straight to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              />
              <button className="bg-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition shadow-lg w-full sm:w-auto whitespace-nowrap">
                Join Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;