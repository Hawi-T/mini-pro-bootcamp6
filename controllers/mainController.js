// Home route
exports.home = (req, res) => {
  res.json({
    message: "Welcome to the Express MVC Server"
  });
};

// About route
exports.about = (req, res) => {
  res.json({
    message: "This is a simple Express.js backend using MVC pattern"
  });
};

// Contact route
exports.contact = (req, res) => {
  res.json({
    email: "contact@example.com",
    phone: "+251-900-000-000"
  });
};

// Dynamic data route
exports.time = (req, res) => {
  res.json({
    currentTime: new Date().toLocaleTimeString()
  });
};

// POST route – echo JSON
exports.echo = (req, res) => {
  const { name, message } = req.body;

  // Simple validation (BONUS)
  if (!name || !message) {
    return res.status(400).json({
      error: "Name and message are required"
    });
  }

  res.json({
    receivedData: {
      name,
      message
    }
  });
};
