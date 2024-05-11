import React from "react";

export default function ToDo({
  text,
  updateToDoList,
  deleteToDoList,
  toggleToDoList,
  isCompleted,
}) {
  return (
    <div className="todo-item">
      <div className="circle" onClick={toggleToDoList}>
        <span>&#10003;</span>
      </div>
      <div className={isCompleted ? "done" : ""}>{text}</div>
      <div className="icons">
        <span onClick={updateToDoList}>&#9998;</span>
        <div onClick={deleteToDoList}>X</div>
      </div>
    </div>
  );
}
