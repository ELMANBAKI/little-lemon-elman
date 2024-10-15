import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
      <nav>
        <ul>
          <li><Link to="/">الصفحة الرئيسية</Link></li>
          <li><Link to="/booking">حجز الطاولة</Link></li>
          <li><Link to="/specializations">العروض الخاصة</Link></li>
          <li><Link to="/customersSay">شهادات العملاء</Link></li>
          <li><Link to="/casablanca">معلومات عن   Casablanca</Link></li>
        </ul>
      </nav>
    );
  };
  
  
  
  export default Nav;