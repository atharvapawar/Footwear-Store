import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="logo-container"></div>
      <h1>🛒</h1>
      <Category />
      <Price />
      <Colors />
    </section>
  );
};

export default Sidebar;
