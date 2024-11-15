import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="text-white">
        <div className=" flex justify-between py-4 container">
          <h2>START FRAMEWORK</h2>
          <ul className="flex">
            <li>
              <Link to="about">ABOUT</Link>
            </li>
            <li>
              <Link to="portofolio">PORTOFOLIO</Link>
            </li>
            <li>
              <Link to="contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
