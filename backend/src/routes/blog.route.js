import express from 'express';
import { verifyJwt } from '../middleware/verifyJwt.js';
import {
  createBlog,
  deleteBlog,
  getAllBlog,
  getBlogById,
  updateBlog,
  getMyPosts,
} from '../controllers/blog.controller.js';

const router = express.Router();

//public route
router.get('/', getAllBlog);
router.get('/:id', getBlogById);

//protected route
router.get('/my-posts', verifyJwt, getMyPosts);
router.post('/', verifyJwt, createBlog);
router.put('/:id', verifyJwt, updateBlog);
router.delete('/:id', verifyJwt, deleteBlog);

export default router