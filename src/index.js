const path = require("path");
const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

console.log(process.env.RDS_HOSTNAME);
console.log(process.env.RDS_USERNAME);
console.log(process.env.DB_NAME);
console.log(process.env.RDS_PORT);

app.get("/", (req, res) => {
  console.log(`Request for ${req.url}`);
  res.send("hello from master!!");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
