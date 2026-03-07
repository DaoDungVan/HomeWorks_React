import { useState } from "react";

export default function AddTask({setTasks}) { // do đây là con nhận của cha nên nó chuyền vào và để trong {}.
  const [text, setText] = useState(""); // do hiện tại input vẫn chưa lưu được giá trị nên dùng state để lưu;

  function handleAddTask(){
    setTasks((tasks) =>[ // setTasks dùng để cập nhật state tasks, tasks là state hiện tại của tasks 
    // (cách viết dài nhưng an toàn) hơn setTasks([...tasks, newtasks])
      ...tasks, // spread operator, để copy toàn bộ code cũ
      {
        id: Date.now(), // tạo id duy nhất dựa trên thời gian
        text: text, // nội dung task lấy từ state text
        done: false, // task mới mặc định chưa hoàn thành
      },
    ]);

    setText(""); //reset input sau khi thêm task
  }
  return (
    <>
      <input
        placeholder="Add task"
        value={text} // value lấy từ state để react quản lý input
        onChange={(e) => { // khi gõ input => cập nhật state text
          setText(e.target.value);
        }}
      />

      <button onClick={handleAddTask}>Add</button>
    </>
  );
}
