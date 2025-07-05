import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Success = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/sandwich.png" alt="success" style={{ width: 300, height: 'auto', marginBottom: 16 }} />
          <h1>Redirecting to home in {countdown} seconds...</h1>
          <Link to={"/"}>
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default Success;