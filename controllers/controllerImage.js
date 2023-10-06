const fs = require("fs");
const path = require("path");

exports.controllerImage = (req, res) => {
  // Получите имя файла из параметра пути
  const filename = req.params.filename;

  // Путь к папке, где находятся ваши файлы
  const filePath = path.join(__dirname, "../public/", filename);

  // Чтение файла и отправка его в ответе
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).json({ message: "Not Found" });
    } else {
      // Установите правильный Content-Type для файла
      res.setHeader("Content-Type", "image/jpeg"); // Замените на нужный MIME-тип
      res.sendFile(filePath);
    }
  });
};
