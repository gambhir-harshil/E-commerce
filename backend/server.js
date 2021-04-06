require("dotenv").config();

const cors = require("cors");
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get("https://sleepy-crag-69552.herokuapp.com/api/products/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("https://sleepy-crag-69552.herokuapp.com/api/products/api/products", productRoutes);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
