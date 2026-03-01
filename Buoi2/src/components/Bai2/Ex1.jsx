import { useState } from "react";

const Ex1 = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const increaseByFive = () => {
    setCount(count + 5);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Counter</h2>

      <h1 style={{ color: count < 0 ? "red" : "black" }}>{count}</h1>

      {count > 10 && <p style={{ color: "red" }}>High value</p>}

      <button onClick={increase}>Increase +1</button>
      <button onClick={decrease}>Decrease -1</button>
      <button onClick={increaseByFive}>Increase +5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Ex1;
