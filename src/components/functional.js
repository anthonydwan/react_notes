import React from "react";

// you can use ES6 arrow function just like normal js
const Greet = () => <h1>Hello Anthony</h1>;

// 3. Learning about JSX
const Hello = () => {
  // return (
  //     <div>
  //         <h1>Hello Anthony</h1>
  //     </div>
  // )

  // JS way - what happens behind the scenes
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "<h1>Hello Anthony</h1>")
  );
};

export default Greet;
export { Hello };
