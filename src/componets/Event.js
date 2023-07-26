import React from "react";

function Event() {
  function clickHandler() {
    alert("oh...you clicked");
  }
  return <button onClick={clickHandler}>Click me</button>;
}

export default Event;
