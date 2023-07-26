import React from "react";
import { useState } from "react";
import Condition from "./Condition";
import Change from "./Change";
const Main = () => {
  const [isToggled, setToggled] = useState(false);
  return (
    <div className="App">
      <Change />
      <button onClick={() => setToggled(!isToggled)}> Toggle </button>
      {isToggled && <Condition />}
    </div>
  );
};

export default Main;
