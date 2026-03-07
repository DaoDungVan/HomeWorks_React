import React, { useState } from "react";
import { useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1); // Cập nhật count mỗi khi nó thay đổi để đảm bảo rằng useEffect sẽ được gọi lại khi count thay đổi và tránh việc useEffect bị gọi vô hạn khi count thay đổi liên tục.
    // tại sao để setCount(count + 1) ở đây lại gây ra lỗi vô hạn loop? Vì khi count thay đổi, useEffect sẽ được gọi lại, và trong useEffect lại có setCount(count + 1) sẽ làm cho count thay đổi tiếp tục, dẫn đến useEffect lại được gọi lại, và cứ thế tiếp tục mãi mãi.
    document.title = `You clicked ${count} times`;
    console.log(`Count updated to ${count}`);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
