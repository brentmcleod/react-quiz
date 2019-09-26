import React from "react";
import SingleSelect from "./questionTypes/SingleSelect";
import MultiSelect from "./questionTypes/MultiSelect";
import OrderSelect from "./questionTypes/OrderSelect";

const components = {
  SingleSelect,
  MultiSelect,
  OrderSelect
};

const Question = ({ question, onAnswersSubmit }) => {
  const QuestionComponent = components[question.type];
  return (
    <QuestionComponent question={question} onAnswersSubmit={onAnswersSubmit} />
  );
};

export default Question;
