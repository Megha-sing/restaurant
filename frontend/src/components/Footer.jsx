import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

       
        <div className="banner">
          <div className="left">
            <h2>Fork & Flame</h2>
            <p>Igniting Flavors. One Dish at a Time.</p>
          </div>
          <div className="right">
            <p><strong>Open Hours:</strong> 11:00 AM  - 11:00 PM (Mon-Sun)</p>
            <p><strong>Location:</strong> 123 Foodie Street, Flavor Town, India</p>
            <p><strong>Contact:</strong> +91 98765 43210 | contact@forkandflame.com</p>
          </div>
        </div>

        
        <div className="banner">
          <div className="left">
            <p>Website developed by <strong>Megha Singh</strong></p>
          </div>
          <div className="right">
            <p>&copy; {new Date().getFullYear()} Fork & Flame. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
