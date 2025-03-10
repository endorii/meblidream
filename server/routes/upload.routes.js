const Router = require("express");
const Category = require("../models/Category");
const fileMiddleware = require("../middlewares/file.middleware");
const path = require("path");
const fs = require("fs");

const router = new Router();

// add and delete image from preview of category

router.put("/upload-preview/:categoryId", fileMiddleware.single("picture"), async (req, res) => {
    try {
        const { file } = req;
        const { categoryId } = req.params;

        if (!file) {
            return res.status(400).json({ message: "Зображення не завантажено" });
        }

        const imagePath = `/images/${file.filename}`;

        const updatedCategory = await Category.findOneAndUpdate(
            { _id: categoryId },
            { previewImage: imagePath },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Категорію не знайдено" });
        }

        return res.json({ message: "Зображення додано", imagePath });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Помилка сервера" });
    }
});

router.delete("/delete-preview-image/:categoryId", async (req, res) => {
    try {
        const { categoryId } = req.params;
        const { imagePath } = req.query;

        if (!imagePath) {
            return res.status(400).json({ message: "Шлях до зображення не вказано" });
        }

        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({ message: "Категорію не знайдено" });
        }

        await Category.findByIdAndUpdate(categoryId, { $set: { previewImage: "" } });

        const filePath = path.join(__dirname, "..", imagePath);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        return res.json({ message: "Зображення видалено" });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Помилка сервера" });
    }
});

// add and delete image from bg of category

router.put("/upload-bg/:categoryId", fileMiddleware.single("picture"), async (req, res) => {
    try {
        const { file } = req;
        const { categoryId } = req.params;

        if (!file) {
            return res.status(400).json({ message: "Зображення не завантажено" });
        }

        const imagePath = `/images/${file.filename}`;

        const updatedCategory = await Category.findOneAndUpdate(
            { _id: categoryId },
            { bgImage: imagePath },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Категорію не знайдено" });
        }

        return res.json({ message: "Зображення додано", imagePath });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Помилка сервера" });
    }
});

router.delete("/delete-bg-image/:categoryId", async (req, res) => {
    try {
        const { categoryId } = req.params;
        const { imagePath } = req.query;

        if (!imagePath) {
            return res.status(400).json({ message: "Шлях до зображення не вказано" });
        }

        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({ message: "Категорію не знайдено" });
        }

        await Category.findByIdAndUpdate(categoryId, { $set: { bgImage: "" } });

        const filePath = path.join(__dirname, "..", imagePath);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        return res.json({ message: "Зображення видалено" });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Помилка сервера" });
    }
});

// add and delete images from category

router.put("/upload/:categoryId", fileMiddleware.single("picture"), async (req, res) => {
    try {
        const { file } = req;
        const { categoryId } = req.params;

        if (!file) {
            return res.status(400).json({ message: "Зображення не завантажено" });
        }

        const imagePath = `/images/${file.filename}`;

        const updatedCategory = await Category.findOneAndUpdate(
            { _id: categoryId },
            { $push: { images: imagePath } },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Категорію не знайдено" });
        }

        return res.json({ message: "Зображення додано", imagePath });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Помилка сервера" });
    }
});

router.delete("/delete-image/:categoryId", async (req, res) => {
    try {
        const { categoryId } = req.params;
        const { imagePath } = req.query;

        if (!imagePath) {
            return res.status(400).json({ message: "Шлях до зображення не вказано" });
        }

        const updatedCategory = await Category.findOneAndUpdate(
            { _id: categoryId },
            { $pull: { images: imagePath } },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Категорію не знайдено" });
        }

        const filePath = path.join(__dirname, "..", imagePath);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        return res.json({ message: "Зображення видалено" });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Помилка сервера" });
    }
});

module.exports = router;
