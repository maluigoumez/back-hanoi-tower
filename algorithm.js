const express = require("express");
const algorithm = express();
const towerOfHanoi = require("./routes/towerOfHanoi");

algorithm.use((req, res, next) => {
  // Assuming you want to call the towerOfHanoi function here
  const numDisks = req.query.numDisks; // Assuming you're passing numDisks via query parameter
  if (!numDisks || isNaN(numDisks)) {
    // Handling invalid or missing input
    return res.status(400).json({ error: "Invalid or missing input." });
  }

  // Calling the towerOfHanoi function with the provided number of disks
  const moves = towerOfHanoi(numDisks);

  // Sending the moves as response
  res.status(200).json({ moves });
});

module.exports = algorithm;
