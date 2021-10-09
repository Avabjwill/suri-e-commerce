require('dotenv').config()

const mongoose = require("mongoose");



     mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Product-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

   console.log("MongoDB connection SUCCESS");

   module.exports = mongoose.connection;