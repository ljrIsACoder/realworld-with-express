const express = require("express");
const morgan = require("morgan");

const errorHandler = require("./middleware/error-handler");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", require("./router/index"));

app.use(errorHandler());

app.listen(3000, () => {
  console.log("Server running on port 3000...");
});
