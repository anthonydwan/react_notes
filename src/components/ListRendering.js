import React from "react";

export default function ListRendering() {
  const names = ["Bruce", "Clark", "Diana"];
  //   approach 1:  array function in the return
  // return (

  // <div>
  //   {names.map((name) => (
  //     <h2>{name}</h2>
  //   ))}
  // </div>
  // );

  // approach 2: array function before the return
  const nameList = names.map((name) => <h2>{name}</h2>);
  return <div>{nameList}</div>;
}

// this can be used for more complicated situations where the list is an array of objects (complex objects), these complex objects should be separated into an individual component
