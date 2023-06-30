import express from "express";
import {
  getCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} from "../controllers/CategoryController.js";

export default express.Router()
  .get('/category', getCategory)
  .get('/category/:id', getCategoryById)
  .post('/category', createCategory)
  .patch('/category/:id', updateCategory)
  .delete('/category/:id', deleteCategory);