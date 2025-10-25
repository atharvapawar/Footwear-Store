import React, { memo } from "react";
import Nav from "./Nav";

const Navigation = memo(({ query, onSearchChange, isLoading }) => {
  return (
    <div>
      <Nav
        query={query}
        onSearchChange={onSearchChange}
        isLoading={isLoading}
      />
    </div>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
