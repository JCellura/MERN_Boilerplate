const router = require("express").Router();
const modelRoutes = require("./model");

// Book routes
router.use("/models", modelRoutes);

module.exports = router;
