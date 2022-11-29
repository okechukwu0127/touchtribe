import React from "react";
import ReactDOM from "react-dom";



const Button = ({ label }) => {
  return <div style={{ border: "1px solid #ccc", padding: 10 }}>{label}</div>;
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});
