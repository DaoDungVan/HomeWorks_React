import { useState } from "react";

const Ex2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h2>Profile</h2>

      <button onClick={handleToggle}>
        {isVisible ? "Hide Profile" : "Show Profile"}
      </button>

      {isVisible && (
        <div>
          <p><strong>Name:</strong> Nguyen Van A</p>
          <p><strong>Job:</strong> Frontend Developer</p>
          <p><strong>Bio:</strong> Passionate about building UI systems</p>
        </div>
      )}
    </div>
  );
};

export default Ex2;