# Fitmeal-API

FitMeal API is a backend-only REST API for tracking meals, calories, and macronutrients. Users can log meals, update or delete them, and get daily nutrition summaries. Built with Node.js, Express, MongoDB, and JWT authentication.

---

## Features

- User registration and login with JWT authentication
- Create, read, update, and delete meals
- Track calories, protein, carbs, fats
- Daily nutrition summaries
- All meals are user-specific (private)

---

## Technologies

- Node.js
- Express
- MongoDB & Mongoose
- JWT for authentication
- bcryptjs for password hashing

---

## API Endpoints

### Auth

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| POST   | `/auth/register` | Register a new user   |
| POST   | `/auth/login`    | Login and receive JWT |

### Meals (Protected)

| Method | Endpoint     | Description                          |
| ------ | ------------ | ------------------------------------ |
| GET    | `/meals`     | Get all meals for the logged-in user |
| POST   | `/meals`     | Create a new meal                    |
| PUT    | `/meals/:id` | Update a meal                        |
| DELETE | `/meals/:id` | Delete a meal                        |
