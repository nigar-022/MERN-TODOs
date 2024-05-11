import { useEffect, useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import {
  addToDo,
  getAllToDo,
  updateToDo,
  deleteTodo,
  toggleTodo,
} from "./utils/HandleAPi";

function App() {
  const [todo, setTodo] = useState([]);
  const [inputText, setInputText] = useState("");
  const [editText, setEditText] = useState(false);
  const [todoId, setTodoId] = useState("");
  console.log(todo);

  useEffect(() => {
    getAllToDo(setTodo);
  }, []);

  const updateToDoList = (id, text) => {
    setEditText(true);
    setInputText(text);
    setTodoId(id);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>MERN TODO APP</h1>
        <input
          type=" text"
          placeholder="Enter your to dos..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={() => addToDo(inputText, setInputText, setTodo)}>
          Add
        </button>
        <button
          onClick={() =>
            updateToDo(todoId, inputText, setTodo, setInputText, setEditText)
          }
          className={!editText ? "hide" : "display"}
        >
          Update
        </button>
        {todo &&
          todo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateToDoList={() => updateToDoList(item._id, item.text)}
              deleteToDoList={() => deleteTodo(item._id, setTodo)}
              toggleToDoList={() => toggleTodo(item._id, setTodo)}
              isCompleted = {item.completed}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
