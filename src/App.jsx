import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [quesNo, setQuesNo] = useState(1);
  const [mark, setMark] = useState(1);
  const [negativeMark, setNegativeMark] = useState(0);

  return (
    <div className="container">
      <div className="content">
        <h1>Exam Marks Counter</h1>
        <div className="input">
          <p className="correct">Correct Answer Mark</p>
          <input
            type="number"
            onChange={(e) => setMark(e.target.value)}
            value={mark}
          />
        </div>
        <div className="input">
          <p className="incorrect">Negative Mark</p>
          <input
            type="number"
            onChange={(e) => setNegativeMark(e.target.value)}
            value={negativeMark}
          />
        </div>
        <hr />
        <h2>Question {quesNo}</h2>
        <button
          className="correct"
          onClick={() => {
            setCount((count) => count + 1);
            setQuesNo((quesNo) => quesNo + 1);
          }}
        >
          Correct
        </button>
        <h4 className="correct">Correct: {count}</h4>
        <h4 className="incorrect">Incorrect: {incorrect}</h4>
        <button
          className="incorrect"
          onClick={() => {
            setQuesNo((quesNo) => quesNo + 1);
            setIncorrect((incorrect) => incorrect + 1);
          }}
        >
          Incorrect
        </button>
        <h2>Total Marks: {count * mark - incorrect * negativeMark}</h2>
        <hr />
      </div>
      <div className="footer">
        <p>
          Made by <a href="https://github.com/bhanu-sh">Bhanu</a>
        </p>
      </div>
    </div>
  );
}

export default App;
