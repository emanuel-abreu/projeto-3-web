require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const scanRouter = require("./controllers/scanController");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend")));

app.use("/api", scanRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
