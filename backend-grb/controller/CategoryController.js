import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCategory = async (req, res) => {
  try {
    const response = await prisma.category.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error happened" });
  }
};

export const getCategoryById = async (req, res) => {
  const categoryId = Number(req.params.id);
  try {
    const response = await prisma.category.findUnique({
      where: { id: categoryId },
    });
    if (!response) {
      res.status(404).json({ error: "Category not found" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createCategory = async (req, res) => {
  const { genre, ageRestriction } = req.body;
  const t = await prisma.$transaction();

  try {
    const category = await t.category.create({
      data: {
        genre: genre,
        ageRestriction: ageRestriction,
      },
    });
    await t.$commit();
    res.status(201).json(category);
  } catch (error) {
    await t.$rollback();
    res.status(400).json({ error: "Bad request" });
  }
};

export const updateCategory = async (req, res) => {
  const categoryId = Number(req.params.id);
  const { genre, ageRestriction } = req.body;
  try {
    const category = await prisma.category.update({
      where: { id: categoryId },
      data: { genre, ageRestriction },
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};

export const deleteCategory = async (req, res) => {
  const categoryId = Number(req.params.id);
  try {
    const category = await prisma.category.delete({
      where: { id: categoryId },
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: "Bad request" });
  }
};