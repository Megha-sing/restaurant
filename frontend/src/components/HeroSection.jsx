import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="heroContent" style={{
        backgroundImage: 'url(./rest.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '90vh',
        width: '100%'
      }}>
        <div style={{
          position: 'absolute',
          left: 0,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          bottom: 0,
          zIndex: 2
        }}>
          <h4 style={{
            textAlign: 'center',
            fontSize: '1rem',
            fontWeight: '500',
            color: 'black',
            margin: 0,
            marginBottom: '64px',
            padding: '8px 24px',
            maxWidth: '90%'
          }}>
            Igniting Flavours. One dish at a time.
          </h4>
          <button
            className="menuBtn"
            style={{ marginTop: '0', padding: '14px 36px', fontSize: '1rem' }}
            onClick={() => navigate("/menu")}
          >
            OUR MENU
          </button>
        </div>
        {/* Removed heroImageContainer and img since background is now set */}
      </div>
    </section>
  );
};

export default HeroSection;
