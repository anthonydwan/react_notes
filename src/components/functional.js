import React from "react";

// you can use ES6 arrow function just like normal js
// 4. props is the property that allows react to be dynamic
const Greet = (props) => {
  const { name, heroName } = props;
  console.log(props);
  return (
    //   you can only return one element with a react component
    <div>
      <h1>
        Hello {name} also known as {heroName}
      </h1>
      {/* this will work only when there is something is made below */}
      {props.children}
    </div>
  );
};

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
    // object of key-value part for id/class attribute
    // note that in react, class has to be called using className
    {
      id: "hello",
      className: "dummyClass",
    },
    React.createElement("h1", null, "Hello Bob")
  );
};

const Click = () => {
  // one way of event handling
  const clickHandler = () => {
    console.log("Button clicked");
  };

  return (
    //   you are suppose make a function and not call it (without the parens)
    <div>
      {/* <button onClick={clickHandler()}>Click</button> */}
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default Greet;
export { Hello, Click };
