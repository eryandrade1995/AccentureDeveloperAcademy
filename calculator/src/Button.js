import React from "react";
import "./main.css";


const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};

//Se for verdadeiro não faz nada, se for falso adiciona o classe operator
export const Button = props => (
  <div
    className={`button ${
      isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);