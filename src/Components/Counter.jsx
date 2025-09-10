import React, { useState } from "react";
import "./Counter.scss";

function Counter() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  function Reset() {
    setCount(0);
  }

  return (
    <>
      <h1 className="title">Counter Application !!</h1>
      <h2 className="count">{count}</h2>

      <div className="btn-group">
        <button onClick={Increment}>Increment</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </>
  );
}

export default Counter;
