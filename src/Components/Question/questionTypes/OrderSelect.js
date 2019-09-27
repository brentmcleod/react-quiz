import React, { useState } from "react";
import { addSelectedProps, shuffleAnswers } from "../../../utils/utils";
import Answer from "../Answer";

const Question = ({ question, onAnswersSubmit }) => {
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
                selectedOrder: numSelected + 1
              }
            : answer
        )
      );
      setNumSelected(numSelected + 1);
    } else {
      setAnswers(
        answers.map(answer =>
          answer.selectedOrder >= clickedAnswer.selectedOrder
            ? {
                ...answer,
                selected: false,
                selectedOrder: null
              }
            : answer
        )
      );
      setNumSelected(clickedAnswer.selectedOrder - 1);
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
          onClick={handleAnswerClick}
        />
      ))}
      <button
        className="btn-action"
        onClick={() => onAnswersSubmit(answers)}
        disabled={numSelected !== answers.length}
      >
        Submit Answer
      </button>
    </>
  );
};

export default Question;
