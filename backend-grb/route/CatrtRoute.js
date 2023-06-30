import express from "express";
import {
  getCart,
  getCartById,
  createCart,
  updateCart,
  deleteCart,
} from "../controllers/CartController.js";

export default express.Router()
  .get('/category', getCart)
  .get('/category/:id', getCartById)
  .post('/category', createCart)
  .patch('/category/:id', updateCart)
  .delete('/category/:id', deleteCart);
