import React, { useState } from "react";
import defaultAnswers from "./answers.json";

{/*import "./EightBall.css";*/}


function EightBall({ answers = defaultAnswers }) { 
  const [answer, setAnswer] = useState({
    msg: "Think of a Question.",
 });

 function choice(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

  function handleClick() {
    setAnswer(choice(answers));
  }

  return (
      <div
          className="EightBall"
          onClick={handleClick}
          style={{ backgroundColor: answer.color }}
      >
        <b>{answer.msg}</b>
      </div>
  );
}


export default EightBall
