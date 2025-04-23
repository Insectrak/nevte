import React from "react";
import { Link } from "react-router-dom";

const Menus = () => {
  return (
    <ul>
      <li className="">
        <Link to="/">Inicio</Link>
       {/*} <ul className="submenu">
          <li>
            <Link to="/">Home Style 1</Link>
          </li>
          <li>
            <Link to="/home-2">Home Style 2</Link>
          </li>
          <li>
            <Link to="/home-3">Home Style 3</Link>
          </li>
        </ul> */}
      </li>
      <li>
        <Link to="#nosotros">Nosotros</Link>
      </li>
      {/*<li className="has-dropdown">
        <Link to="/team">Pages</Link>
        <ul className="submenu">
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/team-details">Team details</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/service-details">service details</Link>
          </li>
          <li>
            <Link to="/price">Price</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/faq">Faq</Link>
          </li>
        </ul>
      </li> */}
      <li>
        <Link to="#caracteristicas">Características</Link>
      </li>
      <li className="">
        <Link to="#lineas">Líneas</Link>
        {/*<ul className="submenu">
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/portfolio-details">Portfolio Details</Link>
          </li>
        </ul> */}
      </li>
      <li className="">
        <Link to="#testimonios">Testimonios</Link>
        {/*<ul className="submenu">
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/blog-details">blog Details</Link>
          </li>
        </ul> */}
      </li>
    </ul>
  );
};

export default Menus;
