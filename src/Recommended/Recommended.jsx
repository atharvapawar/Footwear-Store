import React, { memo, useState, useCallback, useEffect } from "react";
import "./Recommended.css";

const Recommended = memo(({ onFilterChange, selectedCategory }) => {
  const [activeFilter, setActiveFilter] = useState(selectedCategory || "all");

  // Sync active filter with selected category
  useEffect(() => {
    if (selectedCategory) {
      setActiveFilter(selectedCategory);
    }
  }, [selectedCategory]);

  const filters = [
    { id: "all", label: "All Products", count: 27 },
    { id: "nike", label: "Nike", count: 8 },
    { id: "adidas", label: "Adidas", count: 7 },
    { id: "puma", label: "Puma", count: 6 },
    { id: "vans", label: "Vans", count: 6 },
  ];

  const handleFilterClick = useCallback(
    (filterId) => {
      setActiveFilter(filterId);
      if (onFilterChange) {
        onFilterChange(filterId);
      }
    },
    [onFilterChange]
  );

  return (
    <section className="recommended-section" aria-label="Product filters">
      <div className="recommended-header">
        <h2 className="recommended-title">
          <span className="title-icon">✨</span>
          Recommended Products
        </h2>
        <p className="recommended-subtitle">
          Discover our curated collection of premium footwear
        </p>
      </div>

      <div className="recommended-filters">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-btn ${
              activeFilter === filter.id ? "active" : ""
            }`}
            onClick={() => handleFilterClick(filter.id)}
            aria-pressed={activeFilter === filter.id}
            aria-label={`Filter by ${filter.label}`}
          >
            <span className="filter-label">{filter.label}</span>
            <span className="filter-count">{filter.count}</span>
          </button>
        ))}
      </div>
    </section>
  );
});

Recommended.displayName = "Recommended";

export default Recommended;
