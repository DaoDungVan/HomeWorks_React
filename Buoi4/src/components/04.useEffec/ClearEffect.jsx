import React, { useEffect, useRef, useState } from "react";

const ClearEffect = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalCount = useRef(0); // đếm số lần timer tạo ra
  
  useEffect(() => {
    intervalCount.current += 1;
    const intervalId = setInterval((s) => {
    setSeconds((s) => s + 1);
    console.log(`Total interval count: ${intervalCount.current}`);
  }, 2_000);

    return () => {
      clearInterval(intervalId);
      console.log("Interval Id has been cleared.");
    };
  }, []);

  return <div><h2>{seconds}</h2></div>;
};

export default ClearEffect;
