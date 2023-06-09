const express = require("express");
const app = express();
const port = process.env.PORT || 8081;

app.use("/", express.static("react"));

app.get("/test", (req, res) => {
  res.send("Server is running !");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
