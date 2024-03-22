const express = require("express");
const router = express.Router();
const towerOfHanoi = require("./towerOfHanoi");

router.get("/", function (req, res, next) {
  console.log("Received request:", req.query); // Check the received query parameters
  const numDisks = req.query.numDisks;
  console.log("numDisks:", numDisks); // Check the value of numDisks
  if (!numDisks || isNaN(numDisks)) {
    console.log("Invalid or missing input.");
    return res.status(400).json({ error: "Invalid or missing input." });
  }

  const moves = towerOfHanoi(numDisks);
  console.log("Moves:", moves); // Check the generated moves

  res.status(200).json({ moves });
});

module.exports = router;
// module.exports = towerOfHanoi;
