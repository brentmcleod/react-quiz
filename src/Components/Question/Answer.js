import React from "react";
import types from "./questionTypes/_questionTypes";

const Answer = props => {
  let suffix = props.type === types.ORDER_SELECT ? "Order" : "";
  let bgColor = props.showAnswers
    ? props["correct" + suffix] === props["selected" + suffix] &&
      props.selected === true
      ? "lightgreen"
      : props["correct" + suffix] !== props["selected" + suffix] &&
        props.selected === true
      ? "lightcoral"
      : props["correct" + suffix] !== props["selected" + suffix] &&
        props.selected === false
      ? "deepskyblue"
      : "lightgray"
    : props.selected
    ? "lightgreen"
    : "lightgray";
  return (
    <button
      className="answer"
      onClick={() => props.onClick(props.index)}
      style={{ backgroundColor: bgColor }}
    >
      {props.type === types.ORDER_SELECT && (
        <span className="answer-order">{props.selectedOrder}</span>
      )}
      <span className="answer-text">{props.text}</span>
      {props.type === types.ORDER_SELECT && (
        <span className="answer-order">
          {props.showAnswers === true && props.correctOrder}
        </span>
      )}
    </button>
  );
};

export default Answer;
