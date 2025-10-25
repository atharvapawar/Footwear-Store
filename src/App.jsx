import { useState, useMemo, useCallback } from "react";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./index.css";
import products from "./db/data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // --- Optimized Handlers with useCallback ---
  const handleInputChange = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  const handleChange = useCallback((event) => {
    setSelectedCategory(event.target.value);
  }, []);

  const handleClick = useCallback((event) => {
    setSelectedCategory(event.target.value);
  }, []);

  // --- Optimized Filtering Logic ---
  const filteredProducts = useMemo(() => {
    if (!products || products.length === 0) return [];

    let filtered = [...products]; // Create a copy to avoid mutating original

    // Search filter with better performance
    if (query && query.trim() !== "") {
      const searchTerm = query.toLowerCase().trim();
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm) ||
          product.company.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm)
      );
    }

    // Category filter with exact match
    if (selectedCategory && selectedCategory !== "all") {
      const category = selectedCategory.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === category ||
          product.color.toLowerCase() === category ||
          product.company.toLowerCase() === category
      );
    }

    return filtered;
  }, [query, selectedCategory]);

  // --- Loading state simulation ---
  const handleSearch = useCallback(async (searchQuery) => {
    setIsLoading(true);
    // Simulate API call delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 300));
    setQuery(searchQuery);
    setIsLoading(false);
  }, []);

  return (
    <div className="app-container">
      <Sidebar
        selectedCategory={selectedCategory}
        handleChange={handleChange}
        onButtonClick={handleClick}
      />
      <Navigation
        query={query}
        onSearchChange={handleInputChange}
        isLoading={isLoading}
      />
      <Recommended
        onFilterChange={handleChange}
        selectedCategory={selectedCategory}
      />
      <Products products={filteredProducts} isLoading={isLoading} />
    </div>
  );
}

export default App;
