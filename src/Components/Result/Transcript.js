import React from "react";
import Answer from "../Question/Answer";

const Transcript = ({ transcript }) => {
  return (
    <>
      <h3>Transcript</h3>
      {transcript.map(question => (
        <>
          <p>{question.text}</p>
          {question.answers.map((answer, index) => (
            <Answer
              key={index}
              index={index}
              type={question.type}
              {...answer}
              showAnswers={true}
              onClick={() => {}}
            />
          ))}
        </>
      ))}
    </>
  );
};

export default Transcript;
