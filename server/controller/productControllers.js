const products = require('../routes/products.js');

const getAllProducts = async (req, res) => {
    try {
        console.log('products', products)
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: " Server Error"});
    }
}

const getProductById = async (req, res) => {
    try {
        const product = products.find(product => product.id == req.params.id)

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: " Server Error"});
    }
}

module.exports = {
    getAllProducts,
    getProductById,
};