import React from "react";

const Answer = props => (
  <button
    className="answer"
    onClick={() => props.onClick(props.index)}
    style={
      props.selected
        ? { backgroundColor: "lightgreen" }
        : { backgroundColor: "lightgray" }
    }
  >
    {props.type === "ORDER_SELECT" && (
      <span className="answer-order">{props.selectedOrder}</span>
    )}
    <span className="answer-text">{props.text}</span>
  </button>
);

export default Answer;
