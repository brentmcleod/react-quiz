import React from "react";
import types from "./questionTypes/_questionTypes";

const Answer = props => (
  <button
    className="answer"
    onClick={() => props.onClick(props.index)}
    style={
      props.selected
        ? { backgroundColor: "deepskyblue" }
        : { backgroundColor: "lightgray" }
    }
  >
    {props.type === types.ORDER_SELECT && (
      <span className="answer-order-left">{props.selectedOrder}</span>
    )}
    <span className="answer-text">{props.text}</span>
    {props.type === types.ORDER_SELECT && (
      <span className="answer-order-right"></span>
    )}
  </button>
);

export default Answer;
