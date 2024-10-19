import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
       
        
      
      <ul>
        <li>
          <Link to="/"> الرئيسية</Link>
        </li>
        <li>
          <Link to="/specializations">العروض الخاصة</Link>
        </li>
        <li>
          <Link to="/booking">حجز </Link>
        </li>

        <li>
          <Link to="/customersSay">شهادات العملاء</Link>
        </li>
        <li>
          <Link to="/casablanca"> Little Lemon </Link>
        </li>
      </ul>

      <div className="logo">
        <Link to="/">
          <img src="/images/casablanca (1).png" alt="Little Lemon Logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
