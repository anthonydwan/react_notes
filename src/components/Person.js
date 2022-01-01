import React from "react";

export default function Person({ person }) {
  return (
    <div>
      <h2>
        {person.name} is aged {person.age}
      </h2>
    </div>
  );
}
