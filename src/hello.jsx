import {React, useState} from "react";

function Hello() {

const [heading, setHeading] = useState("Magnificent Monkeys");

function clickHandler() {
    setHeading("Radical Rhinos")
}

  return (
    <>
    <button type="button" onClick={clickHandler}>Click me! </button>
      <h1>{heading}</h1>
    </>
  );
}

export default Hello