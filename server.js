const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(
  cors({
    // origin: "http://localhost:9000", // Adjusted CORS origin

    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Other middleware and routes
app.use(express.json());
app.use("/api", routes); // Mount the routes defined in routes.js under /api

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
