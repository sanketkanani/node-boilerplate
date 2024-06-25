const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { createServer } = require("http");
const connectDB = require("./utils/db/mongoose");
const userRoutes = require("./routes/user");


connectDB();
const app = express();
const httpServer = createServer(app);

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);

const port = process.env.PORT || 3001;

httpServer.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = { app };