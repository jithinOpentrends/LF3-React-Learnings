import React from "react";

export const States = ({ name, language }) => {
  console.log({ name });
  return (
    <div style={{ color: "green", backgroundColor: "yellow" }}>
      <h1>{name}</h1>
      <p>{language}</p>
    </div>
  );
};

// (props) => {
// console.log(props);

// };
export default States;
