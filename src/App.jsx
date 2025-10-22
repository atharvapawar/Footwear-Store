import Nav from "./Navigation/Nav";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./index.css";

function App() {
  return (
    <div>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </div>
  );
}

export default App;
