import React, { useState } from "react";
import Form from "./Grade";

function AddGrade() {
  const [inputList, setInputList] = useState([]);

  const handleClick = (e) => {
    setInputList(inputList.concat(<Form key={Math.random() * 10000} />));
  };

  return (
    <div>
      <button onClick={handleClick}>Add Grade</button>
      {inputList}
    </div>
  );
}

export default AddGrade;