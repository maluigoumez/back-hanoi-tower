// const express = require("express");
// const towerOfHanoi = require("./routes/towerOfHanoi.js");

// const router = express.Router();

// router.get("/algorithm/:numDisks", (req, res) => {
//   const { numDisks } = req.params;
//   const moves = towerOfHanoi(parseInt(numDisks));
//   res.json({ moves });
// });

// module.exports = router;

const express = require("express");
const towerOfHanoi = require("./towerOfHanoi.js");

const router = express.Router();

router.get("/algorithm/:numDisks", (req, res) => {
  const { numDisks } = req.params;
  const moves = towerOfHanoi(parseInt(numDisks));
  res.json({ moves });
});

module.exports = router;
