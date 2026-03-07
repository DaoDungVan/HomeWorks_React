import { useRef } from 'react'

const DOM_UseRef = () => {
  const inputRef = useRef(null); // tạo 1 ref để lưu trữ tham chiếu đến DOM element
  function handleClick(){
    inputRef.current.focus();
  }

  
  return (
    <div>
      <h1>Form</h1>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus to your input element</button>
    </div>
  )
}

export default DOM_UseRef