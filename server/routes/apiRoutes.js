const express = require("express");
const router = express.Router();

const { 
    getAllProducts, 
    getProductById,
} = require("../controller/productControllers");

//@desc   GET all products from db 
//@route GET to API/Products
//@access Public 
router.get("/", getAllProducts);

//@desc   GET all product by id from db 
//@route GET to API/Products/:id
//@access Public 
router.get("/:id", getProductById);

module.exports = router;