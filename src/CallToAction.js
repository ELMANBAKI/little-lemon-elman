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
        <h2>احجز طاولتك الآن!</h2>
        <p>
          تأكد من حصولك على أفضل تجربة طعام في مطعمنا، احجز الآن واستمتع بأشهى
          الأطباق!
        </p>
        <button className="cta-button" onClick={handleBookingClick}>
          احجز الآن
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
