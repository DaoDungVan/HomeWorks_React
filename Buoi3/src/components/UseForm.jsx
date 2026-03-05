import React, { useState } from "react";

const UseForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmit(true); //setIsSubmit(true) được gọi để cập nhật trạng thái isSubmit thành true khi người dùng nhấn nút submit. Điều này sẽ kích hoạt việc hiển thị thông báo lỗi nếu có lỗi và hiển thị thông tin đã nhập nếu không có lỗi.
  }

  const nameError = isSubmit && !name;
  const emailError = isSubmit && !email.includes("@"); // Kiểm tra email có chứa "@" hay không include("@") là một cách đơn giản để kiểm tra định dạng email, nhưng bạn có thể sử dụng regex để kiểm tra kỹ hơn nếu cần.

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* để onSubmit ở đây vì khi người dùng nhấn nút submit, sự kiện onSubmit sẽ được kích hoạt và gọi hàm handleSubmit */}
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <span style={{ color: "red" }}>Name is required</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <span style={{ color: "red" }}>Email is invalid</span>}
        </div>
        <button type="submit">Submit</button>
      </form>

      {isSubmit && !nameError && !emailError && (
        <div>
          <h2>Submitted</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
};

export default UseForm;
