import Nav from "./Navigation/Nav";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";

function App() {
  return (
    <div>
      <Navigation />
      <Nav />
      <Products />
      <Recommended />
    </div>
  );
}

export default App;
