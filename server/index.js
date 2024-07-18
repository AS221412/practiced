const express = require("express");
const app = express();
const productRoutes = require("./routes/product.route");
const mongoose = require("mongoose");
const Product = require("./models/models");

app.listen(3001, () => {
  console.log("Hello World");
});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/products', productRoutes);
 
app.get('/', (req, res) => {
  res.send("Das ist die NODE API ");
});

mongoose.connect(
  "mongodb+srv://admin:alijaan2002@backenddb.uvrh640.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=BackendDB"
)
  .then(() => {
    console.log("connected to the database");
  })
  .catch(() => {
    console.log("connection failed");
  });