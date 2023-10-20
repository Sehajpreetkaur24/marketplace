const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoutes = require("./routes/routes");

mongoose.connect("mongodb://localhost/Marketplace", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(express.json());
app.use("/api", productRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Marketplace");
});

app.listen(3000);
