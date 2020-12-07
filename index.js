const express = require("express");

const app = express();

app.use(() => {
  console.log("hello server...");
  console.log("hello tiga");
  console.log("hello empat");
});

app.listen(4000);
