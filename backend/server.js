require("dotenv").config();

const cors = require("cors");
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const path = require("path");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../frontend/public', 'index.html'));
});

console.log(__dirname);

app.get("https://sleepy-crag-69552.herokuapp.com/api/products/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("https://sleepy-crag-69552.herokuapp.com/api/products", productRoutes);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../frontend/public', 'index.html'));
});

console.log(__dirname);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
