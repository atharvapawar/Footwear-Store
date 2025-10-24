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
          color="linear-gradient(white, gray)"
        />
      </div>
    </div>
  );
};

export default Colors;
