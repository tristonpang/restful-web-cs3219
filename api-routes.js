let router = require("express").Router();

// Default API response
router.get("/", function (req, res) {
    res.json({
        status: 'API working!',
        message: 'Welcome to the server'
    });
});

module.exports = router;
