import * as express from "express";
import { AppDataSource } from "../config/database";
import { User } from "../entities/User";

const router = express.Router();

// Create a new user (POST request)
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
  
// Delete a user by ID (DELETE request)
router.delete("/:id", async (req, res) => {
    console.log(`Deleting user with ID: ${req.params.id}`);
    const userRepository = AppDataSource.getRepository(User);
    const userId = parseInt(req.params.id);
  
    try {
      const user = await userRepository.findOne({ where: { id: userId } });
  
      if (!user) {
        console.log("User not found");
        return res.status(404).json({ message: "User not found" });
      }
  
      await userRepository.remove(user);
      console.log("User deleted successfully");
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ error: "Error deleting user" });
    }
  });

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

