const express = require("express");
const cors = require("cors");
const app = express();
const AppRouter = require("./routes/AppRouter");
const PORT = process.env.PORT || 3001;

//new
const pool = require("./db");

//Middleware
app.use(cors());
app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.json({ message: "Server Works" }));
app.use("/api", AppRouter);
app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`));
