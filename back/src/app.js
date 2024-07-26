const express = require("express")
const app = express()
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));

const cors = require('cors')
app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );

  
//Routig
const userRoute = require('./routes/user.routes')
const categoryRoute = require('./routes/category.routes')
const ProductRoute = require('./routes/product.routes')

//Define Route
app.use('/api/v1/user' , userRoute)
app.use('/api/v1/categroy' , categoryRoute)
app.use('/api/v1/product' , ProductRoute)

module.exports = app