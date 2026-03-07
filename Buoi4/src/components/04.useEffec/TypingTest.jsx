import { useEffect, useRef, useState } from "react";
import "./TypingTest.css";

const SAMPLE_TEXT =
  "This endpoint gets you a personalized Donald Trump quote based upon the input that you give it.";

const TypingTest = () => {
  const [userInput, setUserInput] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (userInput.length === 1 && !isRunning && !isFinished) {
      setIsRunning(true);
    }
  }, [userInput, isRunning, isFinished]);

  useEffect(() => {
    if (!isRunning) return;
    intervalRef.current = setInterval(() => {
      setSeconds((s) => s + 0.01); // Thời gian lấy theo số thập phân, ví dụ 100.55
    }, 10);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  useEffect(() => {
    if (userInput === SAMPLE_TEXT && !isFinished) {
      setIsFinished(true);
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  }, [userInput, isFinished]);

  const handleChange = (event) => {
    const value = event.target.value.slice(0, SAMPLE_TEXT.length);
    setUserInput(value);
  };

  const handleReset = () => {
    setUserInput("");
    setIsRunning(false);
    setIsFinished(false);
    setSeconds(0);
    clearInterval(intervalRef.current);
  };

  const renderSampleText = () => {
    return SAMPLE_TEXT.split("").map((char, index) => {
      let className = "";
      if (index < userInput.length) {
        className = char === userInput[index] ? "correct" : "incorrect";
      }
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };
  return (
    <>
      <h1>Typing Test</h1>
      <div>{renderSampleText()}</div>

      <textarea
        ref={inputRef}
        rows={3}
        value={userInput}
        onChange={handleChange}
        placeholder="Start typing..."
        disabled={isFinished}
      />
      
      <p>Time: {seconds.toFixed(2)}</p>
      <p>Text length: {userInput.length}</p>
      {isFinished && <p>FINISH!</p>}
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default TypingTest;