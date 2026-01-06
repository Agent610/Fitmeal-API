require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/database");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/meals", require("./src/routes/mealRoutes"));

app.get("/", (req, res) => {
  res.send("FitMeal API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
