import React from "react";

const Input = () => {
  return (
    <label htmlFor="price-all" className="sidebar-label-container">
      <input type="radio" name="test" id="test-all" />
      <span className="checkmark"></span>
      <span className="label-text">All</span>
    </label>
  );
};

export default Input;
