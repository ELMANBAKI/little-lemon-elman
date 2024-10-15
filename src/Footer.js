// src/Footer.js
import React from 'react';
import './Footer.css'; // استيراد الأنماط

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Little Lemon. جميع الحقوق محفوظة.</p>
        <ul className="footer-links">
          <li><a href="/">الصفحة الرئيسية</a></li>
          <li><a href="/about">من نحن</a></li>
          <li><a href="/contact">اتصل بنا</a></li>
          <li><a href="/privacy">سياسة الخصوصية</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
