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
            images,
        } = req.body;

        const newCategory = new Category({
            displayName,
            pathName,
            filling: {
                title,
                subtitle,
                description,
            },
            images,
        });

        await newCategory.save();

        return res.json({ message: "Категорію додано" });
    } catch (e) {
        res.send({ message: "Server error" });
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
