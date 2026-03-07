import { useState } from "react";

export default function TaskList({ tasks, setTasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <Task task={task} setTasks={setTasks} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, setTasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text); //editText dùng để lưu nội dung khi đang sửa task
  return (
    <>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            // khi checkbox thay đổi
            setTasks((tasks) =>
              tasks.map(
                (
                  t, //lặp qua toàn bộ task
                ) => (t.id === task.id ? { ...t, done: e.target.checked } : t), // tìm task cần cập nhật
                //copy task cũ, chỉ thay đổi done
              ),
            );
          }}
        />

        {isEditing ? (
          <input
            className="task-edit-text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          //editText là state của input khi edit
          <span className="task-text">{task.text}</span>
        )}
      </div>

      <div className="task-actions">
        {isEditing ? (
          <button
            onClick={() => {
              setTasks((tasks) =>
                tasks.map((t) =>
                  t.id === task.id ? { ...t, text: editText } : t,
                ),
              );

              setIsEditing(false);
            }}
          >
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <button
          onClick={
            () => setTasks((tasks) => tasks.filter((t) => t.id !== task.id)) // lọc lại danh sách tasks
            //filter dùng để loại bỏ task cần xóa
          }
        >
          Delete
        </button>
      </div>
    </>
  );
}
