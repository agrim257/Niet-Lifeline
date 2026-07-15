const express = require("express");
const db = require("./database/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

const PORT = 5000;

app.use(express.json());

app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("NIET Lifeline Backend Running");
});
app.get("/test", (req, res) => {
  res.send("TEST WORKING");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});