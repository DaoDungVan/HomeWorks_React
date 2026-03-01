import { useState } from "react";
const Ex3 = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "T-Shirt", quantity: 1 },
      { id: 2, title: "Jeans", quantity: 1 },
    ],
  });
  const handleClick = () => {
    // thay đổi quantity của product thêm 1 đơn vị
    const newItems = cart.items.map((item) => {
      if (item.id === 1) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart({
      ...cart,
      items: newItems,
    });
  };
  return (
    <div>
      <h2>Cart</h2>
      {cart.items.map((item) => (
        <p key={item.id}>
          {item.title}: {item.quantity}
        </p>
      ))}
      <button onClick={handleClick}>Tăng số lượng</button>
    </div>
  );
};
export default Ex3;
