import React from "react";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate
import "./CallToAction.css";

const CallToAction = () => {
  const navigate = useNavigate(); // استخدام هوك التنقل

  const handleBookingClick = () => {
    navigate("/specializations"); // التنقل إلى صفحة الحجز
  };
  return (
    <div className="call-to-action">
      <div className="cta-content">
        <h2>عروضنا الخاصة</h2>
        <p>
          اكتشف عروضنا الخاصة في مطعم <span>Little Lemon</span> واستمتع بتجربة
          طعام فريدة تجمع بين النكهات المتوسطية الأصيلة والعصرية.
        </p>
        <button className="cta-button" onClick={handleBookingClick}>
          اكتشف الآن
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
