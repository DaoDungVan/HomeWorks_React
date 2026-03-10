import { useState } from "react";
import questions from "./questions.js";
import Question from "./Question";
import Result from "./Result";
import "./style.css";

export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0); //câu hỏi hiện tại
  const [selectedOption, setSelectedOption] = useState(null); // đáp án
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false); 

  function handleSelect(option) {
    // TODO: 2:
    // lưu đáp án đã chọn vào state
    setSelectedOption(option);
  }

  function handleNext() {
    // TODO: 3:
    // nếu chưa chọn đáp án thì không làm gì
    if(selectedOption == null) return;

    // TODO: 4:
    // nếu đáp án chọn đúng thì tăng score lên 1
    if(selectedOption === currentQuestion.answer){
      setScore(score+1);
    }

    // TODO: 5:
    // nếu chưa hết câu hỏi thì sang câu tiếp theo
    // đồng thời reset selectedOption về null
    // ngược lại thì set finished = true
    if(currentIndex + 1 < total){
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    }else{setFinished(true)}
  }

  function handleRestart() {
    // TODO: 6:
    // đưa bài quiz về trạng thái ban đầu
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setFinished(false);
  }

  const total = questions.length;
  const currentQuestion = questions[currentIndex] ?? null;

  return (
    <div className="app">
      <h1 className="title">Quiz App</h1>

      {!finished ? (
        <>
          <div className="progress">
            Câu {currentIndex + 1}/{total}
          </div>

          {currentQuestion && (
            <Question
              question={currentQuestion}
              selectedOption={selectedOption}
              onSelect={handleSelect}
            />
          )}

          <button
            className="btn next"
            onClick={handleNext}
            disabled={selectedOption == null}
          >
            {currentIndex + 1 === total ? "Finish" : "Next"}
          </button>
        </>
      ) : (
        <Result score={score} total={total} onRestart={handleRestart} />
      )}
    </div>
  );
}