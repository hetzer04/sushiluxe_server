const { menu } = require("../example.menu");

function filterMenu(data, sortedBy) {
  const { type } = sortedBy;

  let filteredMenu = data;
  if (type) {
    filteredMenu = filteredMenu.filter((pizza) => pizza.type === type);
  }
  return filteredMenu;
}

exports.controllerMenu = (req, res) => {
  let filteredMenu = filterMenu(menu, req.query);

  res.json(filteredMenu);
};

exports.controllerMenuById = (req, res) => {
  const targetId = req.params.id; // Идентификатор, по которому нужно найти данные

  let filteredMenu = filterMenu(menu, req.query);

  let pizza;
  filteredMenu.forEach((element) => {
    if (element.id == targetId) {
      pizza = element;
    }
  });

  if (pizza) {
    res.json(pizza);
  } else {
    res.status(404).json({ message: "Not found" });
  }
};
