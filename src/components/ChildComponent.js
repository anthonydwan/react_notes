import React from "react";

function ChildComponent(props) {
  return (
      <div>
          {/* arrow function is easiest way to pass parameter to parent function */}
      <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
