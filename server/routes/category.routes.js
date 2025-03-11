const Router = require("express");
const Category = require("../models/Category");
const path = require("path");
const fs = require("fs");

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

router.get("/categories/:categoryId", async (req, res) => {
    try {
        const { categoryId } = req.params;
        const category = await Category.findOne({ _id: categoryId });

        return res.json({ category });
    } catch (e) {
        console.log(e);
        res.send({ message: "Server error" });
    }
});

router.post("/categories", async (req, res) => {
    try {
        const { displayName, pathName, filling } = req.body;

        if (!displayName || !pathName) {
            return res.status(400).json({ message: "Всі обов'язкові поля повинні бути заповнені" });
        }

        const newCategory = new Category({
            displayName,
            pathName,
            filling,
            previewImage: "",
            bgImage: "",
            images: [],
        });

        await newCategory.save();
        return res.json({ message: "Категорію додано" });
    } catch (e) {
        res.status(500).send({ message: "Server error", error: e.message });
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

        const category = await Category.findOneAndDelete({ _id: categoryId });
        if (!category) {
            return res.status(404).json({ message: "Категорію не знайдено" });
        }

        const imagePaths = [category.previewImage, category.bgImage, ...category.images].filter(
            Boolean
        );

        for (const imagePath of imagePaths) {
            const filePath = path.join(__dirname, "..", imagePath);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        }

        return res.json({ message: "Категорію видалено" });
    } catch (e) {
        console.log(e);
        res.send({ message: "Server error" });
    }
});

module.exports = router;
