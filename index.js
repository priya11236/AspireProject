const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js');
const dotenv = require('dotenv');

const app = express()
//middleware
dotenv.config();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD

//Routes
app.use('/api/products',productRoute)


const mongoURI = `mongodb+srv://${username}:${password}@backenddb.gtz8o.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`;  // Local MongoDB URI
mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected successfully!');
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000')
      })
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const Schema = mongoose.Schema;



