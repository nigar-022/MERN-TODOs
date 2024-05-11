import axios from "axios";

const baseUrl = "http://localhost:5000";

export const getAllToDo = (setTodo) => {
  axios
    .get(baseUrl)
    .then((response) => {
      console.log(response);
      setTodo(response.data);
    })
    .catch((error) => console.log(error));
};

export const addToDo = (text, setText, setTodo) => {
  axios
    .post(`${baseUrl}/add`, { text })
    .then((data) => {
      console.log(data);
      getAllToDo(setTodo);
      setText("");
    })
    .catch((error) => console.log(error));
};

export const updateToDo = (
  todoId,
  text,
  setTodo,
  setInputText,
  setEditText
) => {
  axios
    .post(`${baseUrl}/update`, { _id: todoId, text })
    .then((data) => {
      console.log(data);
      getAllToDo(setTodo);
      setInputText("");
      setEditText(false);
    })
    .catch((error) => console.log(error));
};

export const deleteTodo = (_id, setTodo) => {
  axios
    .delete(`${baseUrl}/delete`, { data: { _id } })
    .then((data) => {
      console.log(data);
      getAllToDo(setTodo);
    })
    .catch((error) => console.log(error));
};

export const toggleTodo = (_id, setTodo) => {
  axios.put(`${baseUrl}/update`, { _id }).then((data) => {
    console.log(data);
    getAllToDo(setTodo);
  });
};
