import React from "react";

const Input = ({ handleChange, value, title, name, color, checked }) => {
  const id = `${name}-${value}`;

  const isWhite = String(value).toLowerCase() === "white";

  // Support plain colors and gradient strings passed as `color` prop.
  const checkmarkStyle = color
    ? color.trim().startsWith("linear-gradient")
      ? { backgroundImage: color }
      : isWhite
      ? { backgroundColor: "white", border: "1px solid #ccc" }
      : { backgroundColor: color, border: "none" }
    : {};

  // Use accent-color for modern browsers to control the native radio dot color.
  // For white swatches we want a black dot so set accentColor to black. This is
  // a progressive enhancement; the CSS fallback (swatch-white class) will also
  // flip the ::after dot color for older browsers.
  const inputStyle = isWhite ? { accentColor: "black" } : {};

  return (
    <label htmlFor={id} className="sidebar-label-container">
      <input
        onChange={handleChange}
        value={value}
        type="radio"
        name={name}
        id={id}
        checked={checked}
        style={inputStyle}
      />
      <span
        className={`checkmark ${isWhite ? "swatch-white" : ""}`}
        style={checkmarkStyle}
      ></span>
      <span className="label-text">{title}</span>
    </label>
  );
};

export default Input;
