const path = require("path");
const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  console.log(req.url);
<<<<<<< HEAD
  res.send("hello from staging!!");
=======
  res.send("hello from master!");
>>>>>>> master
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
