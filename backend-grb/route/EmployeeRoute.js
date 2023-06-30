import express from "express";
import {
  getEmployee,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/EmployeeController.js";

export default express.Router()
  .get('/category', getEmployee)
  .get('/category/:id', getEmployeeById)
  .post('/category', createEmployee)
  .patch('/category/:id', updateEmployee)
  .delete('/category/:id', deleteEmployee);