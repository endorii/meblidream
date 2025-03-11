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
            status: "Відкрите",
        });

        await newOrder.save();

        return res.json({ message: "Замовлення додано" });
    } catch (e) {
        console.log(e);
        res.send({ message: "Server error" });
    }
});

router.patch("/orders/:orderId", async (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;

    try {
        await Order.findByIdAndUpdate(orderId, { status }, { new: true });
        return res.json({ message: "Замовлення закрито" });
    } catch (error) {
        res.status(500).json({ message: "Помилка оновлення замовлення" });
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
