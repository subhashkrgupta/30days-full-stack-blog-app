import { Blog } from "../models/blog.model.js";

export const getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.find()
      .populate("author", "userName email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "All blogs fetched successfully",
      count: blogs.length,
      blogs
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch blogs",
      error: error.message
    });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate(
      "author",
      "userName email"
    );

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch blog",
      error: error.message,
    });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { title, content, category } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and Content required"
      });
    }

    if (!req.user?._id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized request",
      });
    }

    const blog = await Blog.create({
      title,
      content,
      author: req.user._id,
      category
    });

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      blog
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create blog",
      error: error.message
    });
  }
};

export const getMyPosts = async (req, res) => {
  try {
    if (!req.user?._id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized request",
      });
    }

    const blogs = await Blog.find({ author: req.user._id })
      .populate("author", "userName email")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: blogs.length,
      blogs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch user blog posts",
      error: error.message,
    });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;

    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      updatedBlog
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update blog",
      error: error.message
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;

    const deletedBlog = await Blog.findByIdAndDelete(blogId);

    if (!deletedBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete blog",
      error: error.message
    });
  }
};