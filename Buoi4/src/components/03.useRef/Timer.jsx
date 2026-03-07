import { useState } from "react";

const Timer = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const [intervalId, setIntervalId] = useState(null)
  function handleStart() {
    setStartTime(Date.now()); // trả về số mili giây đã trôi qua kể từ 1/1/1970
    setNow(Date.now()); // cập nhật lại now để đồng bộ với startTime
    const id = setInterval(() => { // mỗi 10ms sẽ cập nhật lại now
      setNow(Date.now());
    }, 10);
    setIntervalId(id);
  }

  function handleStop() {
    clearInterval(intervalId);
  }

  let secondsPassed = 0; // số giây đã trôi qua kể từ khi bấm start
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  return (
    <div>
      <h1>Thời gian đã trôi qua: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Timer;
