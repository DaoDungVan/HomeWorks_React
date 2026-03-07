import { useState } from "react";

const CounterReRender = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    // lưu trữ 1 giá trị mà không gây
    // ra re-render
    setCount(count + 1);
  }
  return <button onClick={handleClick}>Counter {count}</button>;
};

export default CounterReRender;