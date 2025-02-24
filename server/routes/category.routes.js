const Router = require("express");
const Category = require("../models/Category");

const router = new Router();

router.get("/categories", async (req, res) => {
    try {
        const categories = await Category.find({});

        return res.json({ categories });
    } catch (e) {
        console.log(e);
        res.send({ message: "Server error" });
    }
});

router.post("/categories", async (req, res) => {
    try {
        const {
            displayName,
            pathName,
            filling: { title, subtitle, description },
        } = req.body;

        const newCategory = new Category({
            displayName,
            pathName,
            filling: {
                title,
                subtitle,
                description,
            },
        });

        await newCategory.save();

        return res.json({ message: "Категорію додано" });
    } catch (e) {
        res.send({ message: "Server error" });
    }
});

router.put("/categories/:categoryId", async (req, res) => {
    try {
        const { categoryId } = req.params;
        const { displayName, pathName, filling } = req.body;

        const updatedCategory = await Category.findByIdAndUpdate(categoryId, {
            displayName,
            pathName,
            filling,
        });

        if (!updatedCategory) {
            return res.status(404).json({ message: "Категорію не знайдено" });
        }

        return res.json({ message: "Категорію оновлено" });
    } catch (e) {
        console.error("Помилка оновлення категорії:", e);
        res.status(500).json({ message: "Server error" });
    }
});

router.delete("/categories/:categoryId", async (req, res) => {
    try {
        const { categoryId } = req.params;

        await Category.findOneAndDelete({ _id: categoryId });

        return res.json({ message: "Категорію видалено" });
    } catch (e) {
        console.log(e);
        res.send({ message: "Server error" });
    }
});

module.exports = router;
