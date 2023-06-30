import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getEmployee = async (req, res) => {
  try {
    const response = await prisma.employee.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error happened" });
  }
};

export const getEmployeeById = async (req, res) => {
  const employeeId = Number(req.params.id);
  try {
    const response = await prisma.employee.findUnique({
      where: { id: employeeId },
    });
    if (!response) {
      res.status(404).json({ error: "Employee not found" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createEmployee = async (req, res) => {
  const { employeeName, telephoneNumber, salary, city, country } = req.body;
  try {
    const employee = await prisma.employee.create({
      data: {
        employeeName: employeeName,
        telephoneNumber : telephoneNumber,
        salary: salary,
        city: city,
        country: country,
      },
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};

export const updateEmployee = async (req, res) => {
  const employeeId = Number(req.params.id);
  const { employeeName, telephoneNumber, salary, city } = req.body;
  try {
    const employee = await prisma.employee.update({
      where: { id: employeeId },
      data: { employeeName, telephoneNumber, salary, city, country },
    });
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};

export const deleteEmployee = async (req, res) => {
  const employeeId = Number(req.params.id);
  try {
    const employee = await prisma.employee.delete({
      where: { id: employeeId },
    });
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};