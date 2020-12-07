const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// const productRoutes = require("./src/routes/products");
const authRoutes = require("./src/routes/auth");
const blogRoutes = require("./src/routes/blog");

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

// app.use("/v1/customer", productRoutes);
app.use("/v1/auth", authRoutes);
app.use("/v1/blog", blogRoutes);

app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

app.listen(4000);
