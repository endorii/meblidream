const Router = require("express");
const Order = require("../models/Order");

const router = new Router();

router.get("/orders", async (req, res) => {
    try {
        const orders = await Order.find({});

        return res.json({ orders });
    } catch (e) {
        console.log(e);
        res.send({ message: "Server error" });
    }
});

router.post("/orders", async (req, res) => {
    try {
        const { theme, name, phone, message } = req.body;

        const newOrder = new Order({
            theme,
            name,
            phone,
            message,
        });

        await newOrder.save();

        return res.json({ message: "Замовлення додано" });
    } catch (e) {
        console.log(e);
        res.send({ message: "Server error" });
    }
});

router.delete("/orders/:orderId", async (req, res) => {
    try {
        const { orderId } = req.params;

        await Order.findOneAndDelete({ _id: orderId });

        return res.json({ message: "Замовлення видалено" });
    } catch (e) {
        console.log(e);
        res.send({ message: "Server error" });
    }
});

module.exports = router;
