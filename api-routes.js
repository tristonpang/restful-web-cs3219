let router = require("express").Router();
let contactController = require("./contactController");

// Default API response
router.get("/", function (req, res) {
  res.json({
    status: "API working!",
    message: "Welcome to the server",
  });
});

// Contact routes
router
  .route("/contacts")
  .get(contactController.index)
  .post(contactController.new);

router
  .route("/contacts/:contact_id")
  .get(contactController.view)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete);

router.get("/test", function (req, res) {
  res.json({
    status: "Test working!",
    message: "Test success",
  });
});

module.exports = router;
