import { useState } from "react";
const Ex2 = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });
  const handleClick = () => {
    const newToppings = pizza.toppings.slice(); //tạo một bản sao của mảng toppings
    newToppings.push("Olives"); //thêm topping mới vào mảng
    setPizza({
      ...pizza, // sử dụng spread operator để giữ nguyên các thuộc tính khác của pizza
      toppings: newToppings,
    });
  };
  return (
    <div>
      <h2>{pizza.name}</h2>
      <p>Toppings: {pizza.toppings.join(", ")}</p> {/* hiển thị danh sách toppings */}
      <button onClick={handleClick}>Thêm topping</button>
    </div>
  );
};
export default Ex2;
