import React from "react";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <div className="sidebar-section">
      <h2 className="sidebar-title price-title">Colors</h2>
      <div className="sidebar-items">
        <Input
          handleChange={handleChange}
          value="all"
          title="All"
          name="color"
          color="linear-gradient(blue, crimson)"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="color"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="color"
          color="red"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="color"
          color="green"
        />
        <Input
          handleChange={handleChange}
          value="white"
          title="White"
          name="color"
          color="white"
        />
        {/* removed stray unlabeled radio that overlapped other items */}

        {/* <label
          htmlFor="color-all"
          className="sidebar-label-container color-title"
        >
          <input type="radio" name="color" id="color-all" defaultChecked />
          <span className="checkmark"></span>
          <span className="label-text">All</span>
        </label>
        <label htmlFor="color-black" className="sidebar-label-container">
          <input type="radio" name="color" id="color-black" />
          <span className="checkmark"></span>
          <span className="label-text">Black</span>
        </label>
        <label htmlFor="color-blue" className="sidebar-label-container">
          <input type="radio" name="color" id="color-blue" />
          <span className="checkmark"></span>
          <span className="label-text">Blue</span>
        </label>
        <label htmlFor="color-red" className="sidebar-label-container">
          <input type="radio" name="color" id="color-red" />
          <span className="checkmark"></span>
          <span className="label-text">Red</span>
        </label>
        <label htmlFor="color-green" className="sidebar-label-container">
          <input type="radio" name="color" id="color-green" />
          <span className="checkmark"></span>
          <span className="label-text">Green</span>
        </label>
        <label htmlFor="color-white" className="sidebar-label-container">
          <input type="radio" name="color" id="color-white" />
          <span className="checkmark"></span>
          <span className="label-text">White</span>
        </label> */}
      </div>
    </div>
  );
};

export default Colors;
