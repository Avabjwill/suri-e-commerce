const db = require('../config/connection');
const { User, Product } = require('../models');
const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find(productSeeds);
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ Message: " Server Error" });
    }
  }

  const getProductById = async (req, res) => {
    try {
      const products = await Product.findById(req.params.id);

      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ Message: " Server Error" });
    }
  }
  module.exports = {
    getAllProducts,
    getProductById,
  };

});
