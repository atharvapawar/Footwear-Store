import React, { useState, memo } from "react";

const Card = memo(
  ({
    img,
    title,
    star,
    reviews,
    prevPrice,
    newPrice,
    company,
    category,
    color,
  }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    const handleImageError = () => {
      setImageError(true);
    };

    const formatPrice = (price) => {
      if (typeof price === "string") {
        // If it already has $, return as is
        if (price.includes("$")) {
          return price;
        }
        // If it's just a number, add $ and .00
        return `$${price}.00`;
      }
      // If it's a number, format it properly
      return `$${price}.00`;
    };

    const calculateDiscount = () => {
      const oldPriceNum = parseFloat(prevPrice?.replace(/[$,]/g, "") || 0);
      const newPriceNum = parseFloat(newPrice?.replace(/[$,]/g, "") || 0);
      if (oldPriceNum > newPriceNum) {
        const discount = Math.round(
          ((oldPriceNum - newPriceNum) / oldPriceNum) * 100
        );
        return discount > 0 ? `${discount}% OFF` : null;
      }
      return null;
    };

    const discount = calculateDiscount();

    return (
      <div className="card" role="article" aria-label={`Product: ${title}`}>
        <div className="card-image-container">
          {!imageError ? (
            <img
              src={img}
              alt={`${title} - ${company} ${category}`}
              className={`card-img ${imageLoaded ? "loaded" : "loading"}`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
            />
          ) : (
            <div className="card-img-placeholder">
              <span>Image not available</span>
            </div>
          )}
          {discount && (
            <div className="discount-badge" aria-label={`${discount} discount`}>
              {discount}
            </div>
          )}
        </div>

        <div className="card-content">
          <h4 className="card-title" title={title}>
            {title}
          </h4>

          <div className="card-rating">
            <span className="rating-stars" aria-label={`Rating: ${reviews}`}>
              {star}
            </span>
            <span className="rating-text">{reviews}</span>
          </div>

          <div className="card-prices">
            <span
              className="old-price"
              aria-label={`Original price: ${formatPrice(prevPrice)}`}
            >
              {formatPrice(prevPrice)}
            </span>
            <span
              className="new-price"
              aria-label={`Current price: ${formatPrice(newPrice)}`}
            >
              {formatPrice(newPrice)}
            </span>
          </div>

          <div className="card-meta">
            <span className="card-company">{company}</span>
            <span
              className="card-color"
              style={{ backgroundColor: color }}
              title={color}
            >
              {color}
            </span>
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
