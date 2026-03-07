import { useState } from "react";
import AddTask from "./childComponents/AddTask";
import TaskList from "./childComponents/TaskList";
import "./Tasks.css";

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <>
      <h1>Lịch trình du lịch Sapa</h1>

      <AddTask setTasks={setTasks} /> 
      {/* addtask không truyền props vào thì nó sẽ không có quyền để addtask  */}

      <TaskList tasks={tasks} setTasks={setTasks}/>
      {/* truyền setTasks xuống component con để cập nhật state */}
    </>
  );
}

let nextId = 5;

const initialTasks = [
  { id: 0, text: "Tham quan bản Cát Cát", done: true },
  { id: 1, text: "Chinh phục đỉnh Fansipan", done: false },
  { id: 2, text: "Dạo chơi quảng trường trung tâm", done: false },
  { id: 3, text: "Ngắm ruộng bậc thang", done: false },
  { id: 4, text: "Thưởng thức lẩu cá hồi", done: false },
];
