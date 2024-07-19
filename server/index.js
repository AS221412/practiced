const express = require("express");
const app = express();
const productRoutes = require("./routes/product.route");
const mongoose = require("mongoose");
const cors = require("cors");


app.listen(3001, () => {
  console.log("server started on port 3001");
});

// middleware
app.use(express.json({extended: false}));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use('/api/products', productRoutes);
 
app.get('/', (req, res) => {
 res.json({message: "Welcome to the backend"})
});
 

mongoose.connect(
  "mongodb+srv://admin:alijaan2002@backenddb.uvrh640.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=BackendDB"
)
  .then(() => {
    console.log("connected to the database ");
  })
  .catch(() => {
    console.log("connection failed"); 
  });