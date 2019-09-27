import React from "react";
import types from "../Question/questionTypes/_questionTypes";

const Transcript = ({ transcript }) => {
  return (
    <>
      <h3>Transcript</h3>
      {transcript.map((question, index) => (
        <div key={index} className="transcript-question">
          <span className="transcript-question-text">{question.text}</span>
          <span
            className="transcript-question-result"
            style={
              question.answeredCorrectly
                ? { color: "lightgreen" }
                : { color: "lightcoral" }
            }
          >
            {question.answeredCorrectly ? "CORRECT" : "INCORRECT"}
          </span>
          {question.answers.map((answer, index) => (
            <div key={index} className="transcript-answer">
              <span
                className="transcript-answer-text"
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
                  <span className="answer-order">{answer.selectedOrder}</span>
                )}
                {answer.text}
                {question.type === types.ORDER_SELECT && (
                  <span className="answer-order">{answer.correctOrder}</span>
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
