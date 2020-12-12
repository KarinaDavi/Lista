import React, { useState } from "react";
import ToDoItem from "./ToDoItem.jsx";
import InputArea from "./InputArea.jsx";

function App() {
  const [toDoTaskItems, setToDoTaskItems] = useState([]);

  function taskCreator(inputTask) {
    setToDoTaskItems((prevTasks) => {
      return [...prevTasks, inputTask];
    });
  }

  function deleteTask(id) {
    setToDoTaskItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Lista de Tareas</h1>
      </div>
      <InputArea onAdd={taskCreator} />
      <div>
        <ul>
          {toDoTaskItems.map((currentItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={currentItem}
              isClicked={deleteTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
