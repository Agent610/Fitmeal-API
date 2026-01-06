const Meal = require("../models/meal");

const getMeals = async (req, res) => {
  try {
    const meals = await Meal.find({ user: req.user._id }).sort({ date: -1 });
    res.json(meals);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch meals" });
  }
};

const createMeal = async (req, res) => {
  const { name, calories, protein, carbs, fats, mealType, date } = req.body;

  if (!name || !calories || !protein || !carbs || !fats || !date) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const meal = await Meal.create({
      user: req.user._id,
      name,
      calories,
      protein,
      carbs,
      fats,
      mealType,
      date,
    });

    res.status(201).json(meal);
  } catch (error) {
    res.status(500).json({ message: "Failed to create meal" });
  }
};

const updateMeal = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);

    if (!meal) {
      return res.status(404).json({ message: "Meal not found" });
    }

    if (meal.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const updatedMeal = await Meal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updatedMeal);
  } catch (error) {
    res.status(500).json({ message: "Failed to update meal" });
  }
};

const deleteMeal = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);

    if (!meal) {
      return res.status(404).json({ message: "Meal not found" });
    }

    if (meal.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await meal.deleteOne();
    res.json({ message: "Meal removed" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete meal" });
  }
};

module.exports = {
  getMeals,
  createMeal,
  updateMeal,
  deleteMeal,
};
