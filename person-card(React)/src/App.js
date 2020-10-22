import React from "react";
import "./styles.css";

function Person(props) {
  return (
    <div className="person">
      <h2>{props.name}</h2>
      <p>Your age: {props.age} </p>
    </div>
  );
}
export default function App() {
  return (
    <div className="App">
      <Person name="Brijesh" age="21" />
      <Person name="Jude" age="20" />
    </div>
  );
}
