import { PrismaClient, Role } from "@prisma/client";
import bycrt from "bcrypt";

const prisma = new PrismaClient();

export const getAllUser = async (request, response) => {
  try {
    const user = await prisma.user.findMany();
    response.status(200).json(user);
  } catch (error) {
    response.status(404).json({ message: "User field" });
  }
};

export const getUser = async (request, response) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(request.params.id),
      },
    });
    response.status(200).json(user);
  } catch (error) {
    response.status(404).json({ message: "User not found" });
  }
};

export const addUser = async (request, response) => {
  const { email, name, password, role } = request.body;

  const hash = await bycrt.hash(password, 12);

  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hash,
        role: role,
      },
    });
    response.status(201).json(user);
  } catch (error) {
    response.status(400).json({ msg: error.message });
  }
};

export const updateUser = async (request, response) => {
  const { email, name, password, role } = request.body;

  const hash = await bycrt.hash(password, 12);

  try {
    const user = await prisma.user.update({
      where: {
        id: Number(request.params.id),
      },
      data: {
        email: email,
        name: name,
        password: hash,
        role: role,
      },
    });
    response.status(201).json(user);
  } catch (error) {
    response.status(400).json({ msg: error.message });
  }
};

export const deleteUser = async (request, response) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: Number(request.params.id),
      },
    });
    response.status(200).json(user);
  } catch (error) {
    response.status(404).json({ message: "User not found" });
  }
};
