// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart');

router.post('/add/cart', cartController.addToCart);
router.get('/:userId', cartController.getCart);
// router.post('/remove', cartController.removeFromCart);

module.exports = router;
