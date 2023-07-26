import "./App.css";
import React from "react";
// import Main from "./componets/haripriya/Main";
import Apps from "./componets/athul/Apps";

//Conditional rendering IF and ELSE
// function App() {

//   const CheckNumber = ({number}) => {
//     if (number > 0) {
//       return <h1>positive number</h1>
//     }
//     else if (number < 0) {
//       return <h2>negATIVE</h2>

//     }
//     else {
//       return <h1> zero</h1>
//     }
//   };
//   return (
//     <div>
//        <CheckNumber number={1}/>
//     </div>
//   );
// }

// export default App;

//Conditional rendering JAVASCRIPT EXPRESSION AYIT

// function App() {
//   let number = -1;
//   return (
//     <div>
//       {number > 0 ? (
//         <h1>positive</h1>
//       ) : number < 0 ? (
//         <h2>negATIVE</h2>
//       ) : (
//         <h1>zero</h1>
//       )}
//     </div>
//   );
// }

// export default App;

  

// //Conditional rendering JAVASCRIPT EXPRESSION IN COMPONENT
// import M from "./Components/contitional/Main";

function App() {
 
  return (
    <div>
      <Apps isLoggedin={ true} />
    </div>
  );
}

export default App;