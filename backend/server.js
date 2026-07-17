console.log("SERVER FILE RUNNING");
const express = require("express");
const cors = require("cors");
const db = require("./database/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
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