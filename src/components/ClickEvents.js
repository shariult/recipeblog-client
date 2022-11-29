import React, { useState } from "react";

function ClickEvents() {
  let [name, setName] = useState("Alam"),
    [age, setAge] = useState(24);
  const handleClick = (name, e) => {
    console.log(`Hello, ${name}`, e);
  };
  const handleStateClick = () => {
    setName("Ali");
    setAge(30);
  };
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        className="btn"
        style={{ margin: "16px 0" }}
        onClick={(e) => handleClick("Shariul", e)}
      >
        Click Me
      </button>
      <p className="paragraph" style={{ fontSize: "24px", margin: "16px 0" }}>
        {name} is {age} years old
      </p>
      <button
        className="btn"
        style={{ margin: "16px 0" }}
        onClick={handleStateClick}
      >
        Change Text
      </button>
    </div>
  );
}

export default ClickEvents;
