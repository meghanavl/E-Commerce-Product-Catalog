import React, { useState } from "react";
import ProductList from "./components/ProductList";
import logo from "./logo.png";

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Laptop",
      price: "₹80,000",
      image: "https://images.pexels.com/photos/34803972/pexels-photo-34803972.jpeg",
      description: "High performance laptop",
      rating: 4,
    },
    {
      id: 2,
      name: "Phone",
      price: "₹40,000",
      image: "https://images.pexels.com/photos/9995704/pexels-photo-9995704.jpeg",
      description: "Smartphone with great camera",
      rating: 4,
    },
    {
      id: 3,
      name: "Headphones",
      price: "₹2,000",
      image: "https://images.pexels.com/photos/14935011/pexels-photo-14935011.jpeg",
      description: "Noise cancelling headphones",
      rating: 4,
    },
    {
      id: 4,
      name: "Watch",
      price: "₹5,000",
      image: "https://images.pexels.com/photos/22032440/pexels-photo-22032440.jpeg",
      description: "Smartwatch with fitness tracking",
      rating: 4,
    },
    {
      id: 5,
      name: "Shoes",
      price: "₹3,500",
      image: "https://images.pexels.com/photos/30707529/pexels-photo-30707529.jpeg",
      description: "Comfortable running shoes",
      rating: 4
    },
    {
  id: 6,
  name: "Tablet",
  price: "₹30,000",
  image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg",
  description: "Portable tablet for daily use",
  rating: 4
},
{
  id: 7,
  name: "Camera",
  price: "₹50,000",
  image: "https://images.pexels.com/photos/3526944/pexels-photo-3526944.jpeg",
  description: "High resolution digital camera",
  rating: 5
},
{
  id: 8,
  name: "Speaker",
  price: "₹4,000",
  image: "https://i.pinimg.com/736x/da/b7/79/dab7799c8a44b3d5156ad8b23d33bcfa.jpg",
  description: "Wireless Bluetooth speaker",
  rating: 4
},
{
  id: 9,
  name: "Backpack",
  price: "₹2,500",
  image: "https://i.pinimg.com/1200x/91/24/f7/9124f7c101d23897c87e6f1cab26d9fd.jpg",
  description: "Durable travel backpack",
  rating: 3
},
{
  id: 10,
  name: "Sunglasses",
  price: "₹1,500",
  image: "https://i.pinimg.com/1200x/46/b1/7d/46b17df09d0ce15b03b831f5d3c8cc01.jpg",
  description: "Stylish UV protection glasses",
  rating: 4
}
  ]);

  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <div style={{
  backgroundColor: "#1C1C1C",
  color: "white",
  padding: "15px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}}>
  <div style={{ display: "flex", alignItems: "center" }}>
  <img 
    src={logo} 
    alt="logo" 
    style={{ width: "30px", marginRight: "10px" }} 
  />
  <h2 style={{ margin: 0 }}>MyStoreNameHere</h2> </div>
  <div>
    <span style={{ marginRight: "20px", cursor: "pointer" }}>Home</span>
    <span style={{ cursor: "pointer" }}>Cart 🛒 ({cartCount})</span>
  </div>
</div>
      <h1 style={{ 
  textAlign: "center", 
  marginTop: "20px",
  fontFamily: "Arial",
  color: "#1C1C1C"
}}>
  Webtech Assignment-3 : Product Catalog
</h1>
      <ProductList products={products} setCartCount={setCartCount} />
    </div>
  );
}

export default App;