console.log("Server...");

// const express = require("express");
// const dotenv = require("dotenv").config();

// const PORT = process.env.PORT || 5000;

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// app.listen(PORT, () => console.log("Server start"));

const express = require("express");
const colors = require("colors");

const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

// Connect to db
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoute"));

app.use(errorHandler);

app.listen(PORT, () => console.log("Server start"));
