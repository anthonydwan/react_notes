import React from "react";
import Person from "./Person";

export default function ListRendering() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 20,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 22,
      skill: "Flutter",
    },
  ];
  //   approach 1:  array function in the return
  // return (

  // <div>
  //   {names.map((name) => (
  //     <h2>{name}</h2>
  //   ))}
  // </div>
  // );

  // approach 2: array function before the return
  const personList = persons.map((person) => (
    <Person key={person.id} person={person}></Person>
  ));
  return <div>{personList}</div>;
}

// this can be used for more complicated situations where the list is an array of objects (complex objects), these complex objects should be separated into an individual component
// the list rendering should be only responsible for rendering the list and then component for rendering the html component

// react uses key to efficiently update rendering thus it must be included when creating list of elements 

// using index as the key of array for rendering:
/*
only when list is static and will not change, reordered or filtered
*/