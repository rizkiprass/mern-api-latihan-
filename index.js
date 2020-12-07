const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const productRoutes = require("./src/routes/products");

app.use(bodyParser.json()); //type JSON

//ketika client mengakses API kita
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //memberikan izin memberi respon ke semua jenis client
  res.setHeader(
    "Access-Control-Allow-Origin",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Origin", "Content-Type, Authorization"); //content-type = kirim header dg content-type json //authorization = digunakan ketika proses pengiriman token ke API
  next();
});

app.use("/v1/customer", productRoutes); //jika menemukan "/" akan lari ke productRoutes

app.listen(4000);
