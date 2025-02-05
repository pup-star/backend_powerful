const router = require('express').Router();
const productController = require("../controllers/productsController");

router.get('/', productController.getAllProduct);

router.get('/:id', productController.getProduct);

router.get('/search/:key', productController.searchProduct);

router.post('/', productController.createProduct);

router.get('/getSearch/:search', productController.search);


module.exports = router;
