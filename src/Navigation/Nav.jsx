import React, { useState, memo } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import "./Navbar.css";

const Nav = memo(({ query, onSearchChange, isLoading }) => {
  const [isWishlistActive, setIsWishlistActive] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleWishlistToggle = () => {
    setIsWishlistActive(!isWishlistActive);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Search functionality is handled by parent component
  };

  return (
    <nav
      className="nav-container"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav-content">
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" aria-label="Open menu">
          <HiOutlineMenuAlt3 />
        </button>

        {/* Search Bar */}
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <div className="search-input-container">
            <AiOutlineSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search for shoes, brands, or categories..."
              value={query}
              onChange={onSearchChange}
              disabled={isLoading}
              aria-label="Search products"
            />
            {isLoading && (
              <div className="search-loading" aria-label="Searching...">
                <div className="loading-spinner"></div>
              </div>
            )}
          </div>
        </form>

        {/* Navigation Actions */}
        <div className="nav-actions">
          <button
            className="nav-action-btn wishlist-btn"
            onClick={handleWishlistToggle}
            aria-label={
              isWishlistActive ? "Remove from wishlist" : "Add to wishlist"
            }
          >
            {isWishlistActive ? (
              <FaHeart className="nav-icon active" />
            ) : (
              <FaRegHeart className="nav-icon" />
            )}
            <span className="action-label">Wishlist</span>
          </button>

          <button
            className="nav-action-btn cart-btn"
            aria-label="Shopping cart"
          >
            <AiOutlineShoppingCart className="nav-icon" />
            <span className="action-label">Cart</span>
            {cartCount > 0 && (
              <span
                className="cart-badge"
                aria-label={`${cartCount} items in cart`}
              >
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="nav-action-btn profile-btn"
            aria-label="User profile"
          >
            <AiOutlineUserAdd className="nav-icon" />
            <span className="action-label">Profile</span>
          </button>
        </div>
      </div>
    </nav>
  );
});

Nav.displayName = "Nav";

export default Nav;
