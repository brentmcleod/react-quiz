import React, { useState } from "react";
import { addSelectedProps, shuffleAnswers } from "../../../utils/utils";
import Answer from "../Answer";

const SingleSelect = ({ question, onAnswersSubmit }) => {
  const [numSelected, setNumSelected] = useState(0);
  const [answers, setAnswers] = useState(
    addSelectedProps(
      question.randomiseAnswers
        ? shuffleAnswers(question.answers)
        : question.answers
    )
  );

  const handleAnswerClick = answerIndex => {
    let clickedAnswer = answers[answerIndex];
    if (clickedAnswer.selected === false) {
      setAnswers(
        answers.map((answer, index) =>
          answerIndex === index
            ? {
                ...clickedAnswer,
                selected: true,
                selectedOrder: 1
              }
            : { ...answer, selected: false, selectedOrder: null }
        )
      );
      setNumSelected(1);
    } else {
      setAnswers(
        answers.map((answer, index) =>
          answerIndex === index
            ? {
                ...clickedAnswer,
                selected: false,
                selectedOrder: null
              }
            : answer
        )
      );
      setNumSelected(0);
    }
  };

  return (
    <>
      <div className="question">{question.text}</div>
      {answers.map((answer, index) => (
        <Answer
          key={index}
          index={index}
          type={question.type}
          {...answer}
          showAnswers={false}
          onClick={handleAnswerClick}
        />
      ))}
      <button
        className="btn-action"
        onClick={() => onAnswersSubmit(answers)}
        disabled={!numSelected}
      >
        Submit Answer
      </button>
    </>
  );
};

export default SingleSelect;
