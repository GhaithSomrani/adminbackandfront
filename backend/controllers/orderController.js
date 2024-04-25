const expressAsyncHandler = require('express-async-handler');
const Order = require('../models/order');

const createOrder = expressAsyncHandler(async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        await newOrder.save();
        res.status(200).json("Order created");
    } catch (error) {
        res.status(500).json("Failed to create order");
    }
});

const getAllOrders = expressAsyncHandler(async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json("Failed to get orders");
    }
});

const getOrder = expressAsyncHandler(async (req, res) => {
    const orderId = req.params.id;
    try {
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json("Order not found");
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json("Failed to get order data");
    }
});

const updateOrder = expressAsyncHandler(async (req, res) => {
    const orderId = req.params.id;
    try {
        const updatedOrder = await Order.findByIdAndUpdate(orderId, req.body, {
            new: true
        });
        res.json(updatedOrder);
    } catch (error) {
        res.status(500).json("Failed to update order");
    }
});

const deleteOrder = expressAsyncHandler(async (req, res) => {
    const orderId = req.params.id;
    try {
        const deletedOrder = await Order.findByIdAndDelete(orderId);
        res.json(deletedOrder);
    } catch (error) {
        res.status(500).json("Failed to delete order");
    }
});

module.exports = {
    createOrder,
    getAllOrders,
    getOrder,
    updateOrder,
    deleteOrder,
};
