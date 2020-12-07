import React from "react";
import "./styles.css";

export default function App() {
  var counter = 0;
  function likeEventhandler() {
    console.log("clicked" + counter);
    counter++;
  }
  return (
    <div className="App">
      <h1>Inside Outtt</h1>

      <button onClick={likeEventhandler}>like</button>
    </div>
  );
}
