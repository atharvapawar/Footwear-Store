import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <h1 className="">🛒</h1>
      <div className="logo-container"></div>
      <Category />
      <Price />
      <Colors />
    </section>
  );
};

export default Sidebar;
