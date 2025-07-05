import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const menuData = [
    
  {
    category: "Specials",
    items: [
      {
        name: "ROASTED LAMB RUMP",
        price: "₹620",
        description: "Tender lamb rump roasted with rosemary and garlic, served with red wine jus.",
      },
      {
        name: "CITRUS CURED SALMON",
        price: "₹560",
        description: "Salmon fillet cured in citrus zest and herbs, served chilled with capers.",
      },
      {
        name: "PAN SEARED SEA BASS",
        price: "₹580",
        description: "Crispy-skinned sea bass with lemon butter sauce and seasonal vegetables.",
      },
      {
        name: "STUFFED STRAWBERRY",
        price: "₹320",
        description: "Juicy strawberries filled with cream cheese and pistachio crumble.",
      },
      {
        name: "BEEF BURGER MEAL",
        price: "₹490",
        description: "Juicy beef burger with cheddar, lettuce, tomato, and crispy fries.",
      },
      {
        name: "MUSSELS SOUP",
        price: "₹450",
        description: "Steamed mussels in a white wine, garlic, and cream broth.",
      },
      {
        name: "ITALIAN SPAGHETTI",
        price: "₹400",
        description: "Classic spaghetti tossed in rich tomato basil sauce and parmesan.",
      },
      {
        name: "GRILLED FISH",
        price: "₹520",
        description: "Chargrilled fish filet with herbs, lemon, and a side of sautéed greens.",
      },
    ],
  },
  {
    category: "Starters",
    items: [
      {
        name: "Grilled Halloumi Skewers",
        price: "₹280",
        description: "Chargrilled halloumi with bell peppers, served with mint yogurt.",
      },
      {
        name: "Spicy Garlic Prawns",
        price: "₹350",
        description: "Juicy prawns tossed in garlic, chili, and olive oil.",
      },
    ],
  },
  {
    category: "Mains",
    items: [
      {
        name: "Flame-Grilled Chicken",
        price: "₹540",
        description: "Herb-marinated chicken grilled to perfection, served with roasted veggies.",
      },
      {
        name: "Signature Burger",
        price: "₹490",
        description: "House-made beef patty, caramelized onions, cheese, and special sauce.",
      },
      {
        name: "Veggie Pasta Primavera",
        price: "₹420",
        description: "Seasonal vegetables with penne pasta in tomato basil sauce.",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Molten Chocolate Cake",
        price: "₹260",
        description: "Rich chocolate cake with a gooey center, served with vanilla ice cream.",
      },
      {
        name: "Classic Tiramisu",
        price: "₹280",
        description: "Espresso-soaked ladyfingers with mascarpone cream.",
      },
    ],
  },
  {
    category: "Beverages",
    items: [
      {
        name: "Fresh Lime Soda",
        price: "₹90",
        description: "Sweet or salted – the perfect refresher.",
      },
      {
        name: "Espresso Shot",
        price: "₹70",
        description: "Strong, bold, and made fresh to order.",
      },
      {
        name: "Fork & Flame Mocktail",
        price: "₹160",
        description: "A signature blend of citrus, mint, and sparkle.",
      },
    ],
  },
];


  return (
    <section className="menu-page">
      <div className="container">
        <h1>Our Menu</h1>
        <p>Explore our delicious offerings below!</p>

        {menuData.map((category, idx) => (
          <div key={idx} className="menu-category">
            <h2>{category.category}</h2>
            <ul>
              {category.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <strong>{item.name}</strong>  {item.price}
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
            {/* Place Home button after the last menu-category */}
            {idx === menuData.length - 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
                <button onClick={() => navigate("/")}>Home</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
