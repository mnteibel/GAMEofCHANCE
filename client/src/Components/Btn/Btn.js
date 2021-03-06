import React from "react";
import "./Btn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Btn = props => (
  <button className="button"{...props}>
  </button>
);

export default Btn;
