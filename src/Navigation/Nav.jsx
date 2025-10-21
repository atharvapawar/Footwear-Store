import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Navbar.css";
import { FaRegHeart } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="nav-container">
      <input
        type="text"
        className="search-input"
        placeholder="Enter your seach shoes"
        name=""
        id=""
      />
      <div>
        <a href="#">
          <FaRegHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
