import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <div className="sidebar-content">
        <Category />
        <Price />
        <Colors />
      </div>
    </section>
  );
};

export default Sidebar;
