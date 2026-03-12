import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("accessToken");
        const authHeaders = {
          Authorization: token ? `Bearer ${token}` : "",
        };

        const userResp = await axios.get("/api/v1/me", {
          headers: authHeaders,
          withCredentials: true,
        });

        const currentUser = userResp.data.user;
        setUser(currentUser);

        const postsResp = await axios.get("/api/v1/blogs/my-posts", {
          headers: authHeaders,
          withCredentials: true,
        });

        setPosts(postsResp.data.blogs || []);
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || "Unable to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  const deletePost = async (postId) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axios.delete(`/api/v1/blogs/${postId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      });

      setPosts((prev) => prev.filter((post) => post._id !== postId));
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to delete post");
    }
  };

  const userPostCount = posts.length;
  const lastPostDate = posts.length > 0 ? new Date(posts[0].createdAt) : null;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto mt-10">
        <header className="bg-white shadow-sm px-8 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
              Welcome back {user?.userName || "User"} 👋
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              You have posted <strong>{userPostCount}</strong> blogs.
            </p>
            {lastPostDate && (
              <p className="text-sm text-gray-500">
                Latest post: {lastPostDate.toLocaleDateString()} {lastPostDate.toLocaleTimeString()}
              </p>
            )}
            <p className="text-sm text-gray-500">Manage your blogs and track performance.</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => navigate("/dashboard/create")}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
              + Create Blog
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
            >
              Back to Home
            </button>
          </div>
        </header>

        {error && (
          <div className="mt-6 text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-2 rounded-lg">
            {error}
          </div>
        )}

        {loading ? (
          <div className="mt-6 p-8 text-center text-gray-600">Loading your posts...</div>
        ) : (
          <div className="bg-white mt-6 rounded-xl shadow-sm border">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3">Title</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {posts.map((post) => (
                  <tr key={post._id} className="border-t">
                    <td className="p-3">{post.title}</td>
                    <td className="p-3">{post.category || "-"}</td>
                    <td className="p-3 capitalize">{post.status}</td>
                    <td className="p-3">{new Date(post.createdAt).toLocaleString()}</td>
                    <td className="p-3 space-x-2">
                      <button
                        onClick={() => navigate(`/dashboard/edit/${post._id}`)}
                        className="px-3 py-1 rounded-md border border-blue-500 text-blue-600 hover:bg-blue-50"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deletePost(post._id)}
                        className="px-3 py-1 rounded-md border border-red-500 text-red-600 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {posts.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-4 text-center text-gray-500">
                      You have not created any blogs yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
