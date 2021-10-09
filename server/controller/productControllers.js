const product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await product.find({});

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: " Server Error"});
    }
}

const getProductById = async (req, res) => {
    try {
        const products = await product.findById(req.params.id);

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: " Server Error"});
    }
}

module.exports = {
    getAllProducts,
    getProductById,
};