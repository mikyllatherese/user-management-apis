
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


