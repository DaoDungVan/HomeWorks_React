import React, { useState } from "react";
import { useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Use Effect happen after mounted and when Components is re-render");
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Count;
