import React from "react";
import Transcript from "./Transcript";

const Result = props => {
  return (
    <>
      <h2>Quiz Results</h2>
      <p>Your score was {props.score}%</p>
      <p>{props.message}</p>
      <button className="btn-action" onClick={props.restart}>
        {props.passQuiz ? "Restart Quiz" : "Try Again"}
      </button>
      {props.passQuiz && <Transcript transcript={props.transcript} />}
    </>
  );
};

export default Result;
