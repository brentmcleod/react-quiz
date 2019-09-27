import React from "react";

const Intro = props => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.introMessage}</p>
      <button className="btn-action" onClick={props.onStartQuiz}>
        Start Quiz
      </button>
    </>
  );
};

export default Intro;
