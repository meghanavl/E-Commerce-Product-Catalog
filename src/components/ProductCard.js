import React from "react";

function ProductCard({ product, setCartCount }) {
  return (
    <div 
  style={{ 
    border: "1px solid #ddd", 
    borderRadius: "14px",
    padding: "15px", 
    width: "220px",
    overflow: "hidden",
    backgroundColor: "white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.2s"
  }}
  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
>
      <img 
  src={product.image} 
  alt={product.name} 
  style={{ 
    width: "100%", 
    height: "150px", 
    objectFit: "cover" 
  }} 
/>
      <h3 style={{ margin: "10px 0" }}>{product.name}</h3>

<p style={{ fontWeight: "bold", color: "#2c3e50" }}>
  {product.price}
</p>

<p style={{ fontSize: "14px", color: "#555" }}>
  {product.description}
</p>

<p>
  {"⭐".repeat(product.rating)}
</p>
<button 
  onClick={() => setCartCount(prev => prev + 1)}
  style={{
    marginTop: "10px",
    padding: "8px",
    width: "100%",
    backgroundColor: "#3D3D3D",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }}
  onMouseEnter={(e) => e.target.style.backgroundColor = "#1C1C1C"}
  onMouseLeave={(e) => e.target.style.backgroundColor = "#3D3D3D"}
>
  Add to Cart
</button>
    </div>
  );
}

export default ProductCard;
