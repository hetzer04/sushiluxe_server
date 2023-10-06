const express = require("express");
const router = express.Router();
const {
  controllerMenu,
  controllerMenuById,
} = require("../controllers/controllerMenu");
const { controllerImage } = require("../controllers/controllerImage");

router.get("/menu", controllerMenu);
router.get("/menu/:id", controllerMenuById);
router.get("/image/:filename", controllerImage);

router.get("*", (req, res) => {
  res.json({ message: "No handler for GET request" });
});

router.post("*", (req, res) => {
  res.json({ message: "No handler for GET request" });
});

module.exports = router;
