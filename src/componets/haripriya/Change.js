import React, { useState } from "react";

function Change() {
  const [color, setColor] = useState("Green");
  function change() {
    setColor("Red");
  }
  return (
    <div>
      <h2>my favourite color is {color} </h2>
      <button onClick={change}>Change</button>
    </div>
  );
}

export default Change;
