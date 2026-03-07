import { useRef, useState } from "react";

const CounterNotReRender = () => {
  const ref = useRef(0);
  // NOTE: useRef sẽ luôn trả về một object mà chứa
  // duy nhất 1 property là current

  function handleClick() {
    // lưu trữ 1 giá trị mà không gây
    // ra re-render
    ref.current = ref.current + 1;
    alert(`Bạn đã click ${ref.current} lần!`);
  }
  return <button onClick={handleClick}>Click me please! {ref.current}</button>;
};

export default CounterNotReRender;