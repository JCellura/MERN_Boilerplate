const router = require("express").Router();
const modelController = require("../../controllers/modelController");

// Matches with "/api/model"
router.route("/")
  .get(modelController.findAll)
  .post(modelController.create);

// Matches with "/api/model/:id"
router
  .route("/:id")
  .get(modelController.findById)
  .put(modelController.update)
  .delete(modelController.remove);

module.exports = router;
