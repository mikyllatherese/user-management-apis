<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> d82085ba52f80f98404de0364f1937dad33f3fbb
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

export default router;
<<<<<<< HEAD

=======
=======
>>>>>>> 7a882badc9378f6142cdaef961a81a779de7f97e
>>>>>>> d82085ba52f80f98404de0364f1937dad33f3fbb
