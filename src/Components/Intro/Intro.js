import React from "react";

const Intro = props => {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.introMessage}</p>
      <button className="btn-action" onClick={props.onStartQuiz}>
        Start Quiz
      </button>
    </>
  );
};

export default Intro;
