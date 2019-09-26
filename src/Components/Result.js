import React from "react";

const Result = props => {
  return (
    <>
      <h2>Quiz Results</h2>
      <p>Your score was {props.score}%</p>
      <button className="btn-action" onClick={props.restartQuiz}>
        Restart Quiz
      </button>
    </>
  );
};

export default Result;
