import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Condition from "./Condition";
import Change from "./Change";

function App() {
  const [isToggled, setToggled] = useState(false);
  return (
    <div className="App">
      <Change />
      <button onClick={() => setToggled(!isToggled)}> Toggle </button>
      {isToggled && <Condition />}
    </div>
  );

}

export default App;
