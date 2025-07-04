import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav>
        {/* <img className="logo" src="logo.svg" alt="logo" /> */}
        
        <div className="logo">Foody Fresh Company</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks
              .filter((element) => element.title !== "HOME")
              .map((element) => (
                <Link
                  to={element.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  key={element.id}
                >
                  {element.title}
                </Link>
              ))}
          </div>
          <button className="menuBtn" onClick={() => navigate("/menu")}>OUR MENU</button>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;