import { useState } from "react";

const Ex4 = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero omnis soluta quasi amet totam unde dolores, illum sequi excepturi iste porro expedita voluptas qui tempora nemo possimus, officiis libero quia.";

  const [showFull, setShowFull] = useState(false);

  const handleToggle = () => {
    setShowFull(!showFull);
  };

  return (
    <div>
      <p>
        {showFull ? text : text.substring(0, 80) + "..."}
      </p>

      <button onClick={handleToggle}>
        {showFull ? "Less" : "More"}
      </button>
    </div>
  );
};

export default Ex4;