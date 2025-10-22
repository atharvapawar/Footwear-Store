import "./Category.css";

const Category = () => {
  return (
    <div className="sidebar-section">
      <h2 className="sidebar-title">Category</h2>
      <div className="sidebar-items">
        <label htmlFor="all" className="sidebar-label-container">
          <input type="radio" name="category" id="all" defaultChecked />
          <span className="checkmark"></span>
          <span className="label-text">All</span>
        </label>
        <label htmlFor="sneakers" className="sidebar-label-container">
          <input type="radio" name="category" id="sneakers" />
          <span className="checkmark"></span>
          <span className="label-text">Sneakers</span>
        </label>
        <label htmlFor="flats" className="sidebar-label-container">
          <input type="radio" name="category" id="flats" />
          <span className="checkmark"></span>
          <span className="label-text">Flats</span>
        </label>
        <label htmlFor="sandals" className="sidebar-label-container">
          <input type="radio" name="category" id="sandals" />
          <span className="checkmark"></span>
          <span className="label-text">Sandals</span>
        </label>
        <label htmlFor="heels" className="sidebar-label-container">
          <input type="radio" name="category" id="heels" />
          <span className="checkmark"></span>
          <span className="label-text">Heels</span>
        </label>
      </div>
    </div>
  );
};

export default Category;
