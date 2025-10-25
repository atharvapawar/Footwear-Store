import React, { memo, useMemo } from "react";
import Card from "../components/Card";
import "./Products.css";

const Products = memo(({ products, isLoading }) => {
  const productCards = useMemo(() => {
    if (!products || products.length === 0) {
      return (
        <div className="no-results-container">
          <div className="no-results-icon">🔍</div>
          <h3>No products found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      );
    }

    return products.map((product) => (
      <Card
        key={product.id}
        img={product.img}
        title={product.title}
        star={product.star}
        reviews={product.reviews}
        prevPrice={product.prevPrice}
        newPrice={product.newPrice}
        company={product.company}
        category={product.category}
        color={product.color}
      />
    ));
  }, [products]);

  if (isLoading) {
    return (
      <section className="products-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading products...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="products-container" aria-label="Products grid">
      <div className="products-grid">{productCards}</div>
    </section>
  );
});

Products.displayName = "Products";

export default Products;
