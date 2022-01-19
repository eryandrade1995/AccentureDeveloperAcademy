import React from "react";
import "./main.css";

export const ClearButton = props => (
  <div className="limpar" onClick={props.handleClear}>
    {props.children}
  </div>
);