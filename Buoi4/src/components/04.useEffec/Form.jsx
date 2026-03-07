import React, { useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("useEffect happened!");
  });
  return (
    <div>
      <h1>Form</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Form;
