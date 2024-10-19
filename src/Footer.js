// src/Footer.js
import React from "react";
import "./Footer.css"; // استيراد الأنماط

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Little Lemon. جميع الحقوق محفوظة.</p>
        <ul className="footer-links">
          <li>
            <a href="/">الصفحة الرئيسية</a>
          </li>
          <li>
            <a href="/casablanca">من نحن</a>
          </li>
          <li>
            <a href="/contactUs">اتصل بنا</a>
          </li>
          <li>
            <a href="/PrivacyPolicy">سياسة الخصوصية</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
