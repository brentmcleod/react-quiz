import React, { useState } from "react";
import Intro from "./Intro";
import Question from "./Question";
import Result from "./Result";

const Quiz = ({ questions, ...props }) => {
  const [view, setView] = useState("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizResults, setQuizResults] = useState([]);

  const handleStartQuiz = () => {
    setView("questions");
  };

  const handleAnswersSubmit = answers => {
    let suffix =
      questions[currentQuestion].type === "ORDER_SELECT" ? "Order" : "";

    let answerResult = answers.every(
      answer => answer["correct" + suffix] === answer["selected" + suffix]
    );

    setQuizResults([...quizResults, answerResult]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setView("results");
    }
  };

  const getScore = results => {
    let correctAnswers = results.filter(answer => answer === true).length;
    return Math.floor((correctAnswers / results.length) * 100);
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
          key={currentQuestion}
          question={questions[currentQuestion]}
          onAnswersSubmit={handleAnswersSubmit}
        />
      ) : (
        <Result score={getScore(quizResults)} restart={props.restar} />
      )}
    </>
  );
};

export default Quiz;
