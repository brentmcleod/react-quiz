import React, { useState } from "react";
import types from "./Question/questionTypes/_questionTypes";
import { addStatusProp } from "../utils/utils";
import Intro from "./Intro/Intro";
import Question from "./Question/Question";
import Result from "./Result/Result";

const Quiz = ({ questions, ...props }) => {
  const [view, setView] = useState("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [transcript, setTranscript] = useState([]);

  const handleStartQuiz = () => {
    setView("questions");
  };

  const handleAnswersSubmit = answers => {
    let question = questions[questionIndex];
    let suffix = question.type === types.ORDER_SELECT ? "Order" : "";

    let answerResult = answers.every(
      answer => answer["correct" + suffix] === answer["selected" + suffix]
    );

    setResults([...results, answerResult]);
    setTranscript([
      ...transcript,
      {
        text: question.text,
        type: question.type,
        answeredCorrectly: answerResult,
        answers: addStatusProp(answers, suffix)
      }
    ]);

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setView("results");
    }
  };

  const getFinalResult = results => {
    let correctAnswers = results.filter(answer => answer === true).length;
    let score = Math.floor((correctAnswers / results.length) * 100);
    let passQuiz = score > props.minScore;
    let message = passQuiz ? props.passMessage : props.failMessage;
    return { score, passQuiz, message };
  };

  return (
    <>
      {view === "intro" ? (
        <Intro
          title={props.title}
          introMessage={props.introMessage}
          onStartQuiz={handleStartQuiz}
        />
      ) : view === "questions" ? (
        <Question
          key={questionIndex}
          question={questions[questionIndex]}
          onAnswersSubmit={handleAnswersSubmit}
        />
      ) : (
        <Result
          restart={props.restart}
          transcript={transcript}
          {...getFinalResult(results)}
        />
      )}
    </>
  );
};

export default Quiz;
