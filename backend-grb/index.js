import express from "express";
import cors from "cors";
import { config } from "dotenv";
import categoryRoutes from "./routes/CategoryRoute.js";
import employeeRoutes from "./routes/EmployeeRoute.js";
import cartRoutes from "./routes/CartRoute.js";

config();

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(categoryRoutes);
app.use(employeeRoutes);
app.use(cartRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});