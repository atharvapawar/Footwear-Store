import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  console.log(handleChange);

  return (
    <div className="sidebar-section">
      <h2 className="sidebar-title price-title">Price</h2>
      <div className="sidebar-items">
        <Input
          handleChange={handleChange}
          value="all"
          title="All"
          name="price"
        />
        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - 50"
          name="price"
        />
        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="price"
        />
        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - 150"
          name="price"
        />
        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="price"
        />
      </div>
    </div>
  );
};

export default Price;
