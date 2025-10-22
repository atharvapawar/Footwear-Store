import "./Price.css";

const Price = () => {
  return (
    <div className="sidebar-section">
      <h2 className="sidebar-title price-title">Price</h2>
      <div className="sidebar-items">
        <label htmlFor="price-all" className="sidebar-label-container">
          <input type="radio" name="price" id="price-all" defaultChecked />
          <span className="checkmark"></span>
          <span className="label-text">All</span>
        </label>
        <label htmlFor="price-0-50" className="sidebar-label-container">
          <input type="radio" name="price" id="price-0-50" />
          <span className="checkmark"></span>
          <span className="label-text">$0 - $50</span>
        </label>
        <label htmlFor="price-50-100" className="sidebar-label-container">
          <input type="radio" name="price" id="price-50-100" />
          <span className="checkmark"></span>
          <span className="label-text">$50 - $100</span>
        </label>
        <label htmlFor="price-100-150" className="sidebar-label-container">
          <input type="radio" name="price" id="price-100-150" />
          <span className="checkmark"></span>
          <span className="label-text">$100 - $150</span>
        </label>
        <label htmlFor="price-over-150" className="sidebar-label-container">
          <input type="radio" name="price" id="price-over-150" />
          <span className="checkmark"></span>
          <span className="label-text">Over $150</span>
        </label>
      </div>
    </div>
  );
};

export default Price;
