import React from "react";

const Input = ({ handleChange, value, title, name, color }) => {
  const id = `${name}-${value}`;
  const checkmarkStyle = color
    ? color === "white"
      ? {
          background: "white",
          border: "1px solid #ccc",
        }
      : { background: color, border: "none" }
    : {};

  const inputStyle = color === "white" ? { background: "black" } : {};

  return (
    <label htmlFor={id} className="sidebar-label-container">
      <input
        onChange={handleChange}
        value={value}
        type="radio"
        name={name}
        id={id}
        style={inputStyle}
      />
      <span className="checkmark" style={checkmarkStyle}></span>
      <span className="label-text">{title}</span>
    </label>
  );
};

export default Input;
