const express = require('express');



const router = express.Router();
router.post('/product', addProduct);
router.get('/product', getProduct);
router.get('/product/:id', getbyIDProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)
router.post('/product/getproducts', getProductPrice)

module.exports = router