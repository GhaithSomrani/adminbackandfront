const router = require('express').Router();
const orderController = require('../controllers/orderController');

// Create a new order
router.post('/', orderController.createOrder);

// Get all orders
router.get('/', orderController.getAllOrders);

// Get an order by its ID
router.get('/:id', orderController.getOrder);

// Update an order
router.put('/:id', orderController.updateOrder);

// Delete an order
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
