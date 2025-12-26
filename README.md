# Express MVC Mini Project

This is a simple Express.js backend server built using the MVC (Model-View-Controller) pattern.  
It handles GET and POST requests and returns JSON responses

Features

- Home route (`/api/`)  
- About route (`/api/about`)  
- Contact route (`/api/contact`)  
- Dynamic route with current time (`/api/time`)  
- POST route that echoes JSON input (`/api/echo`)  
- Handles unknown routes  
- Simple JSON request validation  

Project Structure

express-mvc-server/
│
├── controllers/
│   └── mainController.js
│
├── routes/
│   └── mainRoutes.js
│
├── app.js
├── package.json
└── README.md   (optional)

How to Run

1. **Clone the repository** (or download ZIP):

bash
git clone https://github.com/Hawi-T/mini-pro-bootcamp6.git
cd mini-pro-bootcamp6
Install dependencies:

npm install

Start the server:

node app.js


OR (if you installed nodemon for auto-restart):

npx nodemon app.js


Open your browser or Postman and test the routes:

GET http://localhost:3000/api/
GET http://localhost:3000/api/about

GET http://localhost:3000/api/contact

GET http://localhost:3000/api/time

POST http://localhost:3000/api/
