const Router = require("express");

// const authMiddleware = require("../middlewares/auth.middleware");
// const Call = require("../models/Call");

const router = new Router();

router.get("/call", async (req, res) => {
    try {
        const calls = await Call.find({});

        return res.json({ calls });
    } catch (e) {
        console.log(e);
        res.send({ message: "Server error" });
    }
});

module.exports = router;
