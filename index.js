const express = require("express");
const router = require("./router");
const app = express();
const port = 3000;

app.use(express.static("./public"));

app.use("/api", router);

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
