import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/notFound.svg" alt="notFound" />
          <h3>LOOKS LIKE YOU'RE LOST</h3>
          <p>We can't seem to find you the page you're looking for.</p>
          <Link to={"/"}>
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;