import React from "react";
import types from "../Question/questionTypes/_questionTypes";

const Transcript = ({ transcript }) => {
  return (
    <>
      <h3>Transcript</h3>
      {transcript.map((question, index) => (
        <div key={index} className="transcript-question">
          <div className="transcript-question-text">{question.text}</div>
          <div className="transcript-question-result">
            Answer Result:{" "}
            <span
              style={
                question.answeredCorrectly
                  ? { color: "lightgreen" }
                  : { color: "lightcoral" }
              }
            >
              {question.answeredCorrectly ? "CORRECT" : "INCORRECT"}
            </span>
          </div>
          {question.answers.map((answer, index) => (
            <div key={index} className="transcript-answer-wrapper">
              <span
                className="transcript-answer"
                style={
                  answer.status === "Selected Correctly"
                    ? { backgroundColor: "lightgreen" }
                    : answer.status === "Incorrectly Selected"
                    ? { backgroundColor: "lightcoral" }
                    : answer.status === "Correct Answer"
                    ? { backgroundColor: "deepskyblue" }
                    : { backgroundColor: "lightgray" }
                }
              >
                {question.type === types.ORDER_SELECT && (
                  <span className="transcript-order-left">
                    {answer.selectedOrder}
                  </span>
                )}
                <span className="transcript-answer-text">{answer.text}</span>
                {question.type === types.ORDER_SELECT && (
                  <span className="transcript-order-right">
                    {answer.correctOrder}
                  </span>
                )}
              </span>
              <span className="transcript-answer-status">{answer.status}</span>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Transcript;
