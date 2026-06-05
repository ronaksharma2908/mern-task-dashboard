const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Task = require("./models/Task");
const connectDB = require("./config/db");

dotenv.config();

const seedTasks = async () => {
  try {
    await connectDB();

    // Clear existing tasks
    await Task.deleteMany();

    // Insert demo tasks
    const tasks = [
      { title: "Complete MERN Dashboard", priority: "High", deadline: new Date(), status: "Pending" },
      { title: "Write README.md", priority: "Medium", deadline: new Date(Date.now() + 86400000), status: "Pending" },
      { title: "Test CRUD operations", priority: "Low", deadline: new Date(Date.now() + 2 * 86400000), status: "Completed" }
    ];

    await Task.insertMany(tasks);
    console.log("✅ Demo tasks inserted!");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedTasks();
