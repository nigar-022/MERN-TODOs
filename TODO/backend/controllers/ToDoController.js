const ToDOModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDOModel.find();
  res.send(toDo);
};

module.exports.addToDo = async (req, res) => {
  const { text } = req.body;
  ToDOModel.create({ text }).then((data) => {
    console.log("Todo added");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;

  ToDOModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("ToDo Updated"))
    .catch((error) => console.log(error));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;

  ToDOModel.findByIdAndDelete(_id)
    .then(() => res.send("ToDo Deleted"))
    .catch((error) => console.log(error));
};

module.exports.updateToggleTodo = async (req, res) => {
  const { _id, text } = req.body;

  ToDOModel.findByIdAndUpdate(_id, { completed: true })
    .then(() => res.send("ToDo Updated"))
    .catch((error) => console.log(error));
};
