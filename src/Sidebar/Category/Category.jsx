import "./Category.css";

const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div className="sidebar-items">
        <label htmlFor="all" className="sidebar-label-container">
          <input type="radio" name="category" id="all" defaultChecked />
          <span className="checkmark"></span>All
        </label>
        <label htmlFor="sneakers" className="sidebar-label-container">
          <input type="radio" name="category" id="sneakers" />
          <span className="checkmark"></span>Sneakers
        </label>
        <label htmlFor="flats" className="sidebar-label-container">
          <input type="radio" name="category" id="flats" />
          <span className="checkmark"></span>Flats
        </label>
        <label htmlFor="sandals" className="sidebar-label-container">
          <input type="radio" name="category" id="sandals" />
          <span className="checkmark"></span>Sandals
        </label>
        <label htmlFor="heels" className="sidebar-label-container">
          <input type="radio" name="category" id="heels" />
          <span className="checkmark"></span>Heels
        </label>
      </div>
    </div>
  );
};

export default Category;
