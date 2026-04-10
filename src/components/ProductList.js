import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, setCartCount }) {
  return (
    <div style={{ 
  display: "flex", 
  gap: "25px", 
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "20px"
}}>
      {products.map((product) => (
        <ProductCard 
  key={product.id} 
  product={product} 
  setCartCount={setCartCount}
/>
      ))}
    </div>
  );
}

export default ProductList;