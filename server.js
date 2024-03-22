const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const algorithm = require("./algorithm");

const app = express();

// Enable CORS for requests from http://example.com, allowing only GET and POST methods, and accepting only Content-Type header
app.use(
  cors({
    origin: "http://localhost:9000/",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Other middleware and routes
app.use(express.json());
app.use("/api", routes);
app.use("/algorithm", algorithm);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
