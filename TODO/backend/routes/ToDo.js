const { Router } = require("express");
const {
  getToDo,
  addToDo,
  deleteToDo,
  updateToDo,
  updateToggleTodo,
} = require("../controllers/ToDoController");
const router = Router();

// router.get("/", (req, res) => {
//   res.json({
//     message: "Hi There",
//   });
// });

router.get("/", getToDo);
router.post("/add", addToDo);
router.delete("/delete", deleteToDo);
router.post("/update", updateToDo);
router.put("/update", updateToggleTodo);

module.exports = router;
