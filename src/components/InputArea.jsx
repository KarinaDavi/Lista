import React, { useState } from "react";

function InputArea(props) {
  const [inputTask, setInputTask] = useState("");

  function updateOnChange(event) {
    const newTask = event.target.value;
    setInputTask(newTask);
  }

  return (
    <div className="form">
      <input onChange={updateOnChange} type="text" value={inputTask} />
      <button
        onClick={() => {
          props.onAdd(inputTask);
          setInputTask("");
        }}
      >
        <span>Agregar</span>
      </button>
    </div>
  );
}
export default InputArea;
