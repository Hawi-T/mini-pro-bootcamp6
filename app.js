const express = require("express");
const app = express();
const mainRoutes = require("./routes/mainRoutes");

// Middleware to handle JSON
app.use(express.json());

// Specific base route
app.use("/api", mainRoutes);

// Handle unknown routes (BONUS)
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
