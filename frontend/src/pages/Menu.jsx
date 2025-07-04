import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <section className="menu-page">
      <div className="container">
        <button onClick={() => navigate("/")}>Home</button>
        <h1>Our Menu</h1>
        <p>Explore our delicious offerings below!</p>
        {/* Add your menu items here, or import a Menu component */}
      </div>
    </section>
  );
};

export default Menu;
