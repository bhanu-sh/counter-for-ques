import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(
    localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data")).count
      : 0
  );
  const [incorrect, setIncorrect] = useState(
    localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data")).incorrect
      : 0
  );
  const [quesNo, setQuesNo] = useState(
    localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data")).quesNo
      : 1
  );
  const [mark, setMark] = useState(1);
  const [negativeMark, setNegativeMark] = useState(0);

  //store all the data in local storage in json format
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify({ count, incorrect, quesNo }));
  }, [count, incorrect, quesNo]);

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
        <button
          onClick={() => {
            setCount(0);
            setIncorrect(0);
            setQuesNo(1);
          }}
        >
          Reset
        </button>
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
