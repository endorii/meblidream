const Router = require("express");
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");
const router = new Router();

const authMiddleware = require("../middlewares/auth.middleware");
const User = require("../models/User");

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "Користувача не знайдено" });
        }

        const isPasswordEquals = await bcrypt.compare(password, user.password);

        if (!isPasswordEquals) {
            return res.status(401).json({ message: "Невірний пароль" });
        }

        const accessToken = jwt.sign({ _id: user._id }, config.get("secretAccessKey"), {
            expiresIn: "59m",
        });

        return res.json({
            message: "Ви успішно увійшли в аккаунт!",
            accessToken,
            user,
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Помилка сервера" });
    }
});

router.get("/auth", authMiddleware, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user._id });

        const accessToken = jwt.sign({ _id: user._id }, config.get("secretAccessKey"), {
            expiresIn: "59m",
        });

        return res.json({
            accessToken,
            user,
        });
    } catch (e) {
        console.log(e);
        res.send({ message: "Помилка сервера" });
    }
});

module.exports = router;
