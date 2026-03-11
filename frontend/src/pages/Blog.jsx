import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Search, Calendar, User, ArrowRight, Clock, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();
  // State for search and category filtering
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/v1/blogs", { withCredentials: true });
        if (!mounted) return;
        setPosts(res.data?.blogs || []);
      } catch (err) {
        if (!mounted) return;
        setError(err.response?.data?.message || "Failed to fetch blogs");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    const set = new Set(["All"]);
    posts.forEach((p) => {
      if (p?.category) set.add(p.category);
    });
    return Array.from(set);
  }, [posts]);

  // Filter Logic
  const filteredPosts = posts.filter((post) => {
    const excerpt = (post?.content || "").slice(0, 140);
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      (post.title || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    // pt-24 ensures content isn't hidden behind the fixed navbar
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Our <span className="text-indigo-600">Blog</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Thoughts, tutorials, and insights on modern web development.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                    : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all shadow-sm"
            />
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Blog Grid */}
        {loading ? (
          <div className="text-center py-20">
            <p className="text-gray-600">Loading blogs...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post._id}
                onClick={() => navigate(`/blog/${post._id}`)}
                className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
              >
                {/* Header */}
                <div className="relative p-6 bg-linear-to-br from-gray-900 to-slate-800 text-white">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-indigo-200">
                      {post.category || "General"}
                    </div>
                    <div className="text-xs text-gray-200">
                      {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : ""}
                    </div>
                  </div>
                  <h2 className="mt-3 text-xl font-extrabold leading-snug">
                    {post.title}
                  </h2>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  {/* Meta Data */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />{" "}
                      {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "—"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />{" "}
                      {Math.max(1, Math.ceil((post.content || "").split(/\s+/).length / 200))} min
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                    {(post.content || "").slice(0, 160)}{post.content?.length > 160 ? "..." : ""}
                  </p>

                  {/* Footer: Author & Read More */}
                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                        <User className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {post.author?.userName || "Unknown"}
                      </span>
                    </div>
                    <button className="text-indigo-600 font-semibold text-sm hover:underline flex items-center gap-1">
                      Read <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filtering by a different category.
            </p>
            <button 
              onClick={() => {setSearchQuery(""); setSelectedCategory("All");}}
              className="mt-6 text-indigo-600 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-16">
            <button className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 hover:border-gray-400 transition-colors shadow-sm">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;