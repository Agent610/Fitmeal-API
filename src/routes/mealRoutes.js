const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");

const {
  getMeals,
  createMeal,
  updateMeal,
  deleteMeal,
} = require("../controllers/mealController");

router.use(protect);

router.get("/", getMeals);
router.post("/", createMeal);
router.put("/:id", updateMeal);
router.delete("/:id", deleteMeal);

module.exports = router;
