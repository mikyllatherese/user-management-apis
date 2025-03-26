<<<<<<< HEAD
import express, { Request, Response } from "express";
=======
import * as express from "express";
>>>>>>> Caballero-user-creation
import { AppDataSource } from "../config/database";
import { User } from "../entities/User";

const router = express.Router();

<<<<<<< HEAD
//List all users (GET request)
router.get("/", async (req, res) => {
  console.log(" Fetching all users...");
  const userRepository = AppDataSource.getRepository(User);

  try {
    const users = await userRepository.find();
    console.log(" Users found:", users);
    res.status(200).json(users);
  } catch (error) {
    console.error(" Error retrieving users:", error);
    res.status(500).json({ error: "Error retrieving users" });
  }
});

export default router;
=======
// 📌 Create a new user (POST request)
router.post("/", async (req, res) => {
  console.log(" Creating a new user...");
  const userRepository = AppDataSource.getRepository(User);
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newUser = userRepository.create({ name, username, email, password });
    await userRepository.save(newUser);
    console.log(" User created:", newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(" Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
});

export default router;
>>>>>>> Caballero-user-creation
