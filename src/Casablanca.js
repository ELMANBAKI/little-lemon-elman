import React from 'react';
import './Casablanca.css';

const Casablanca = () => {
  return (
    <div className="chicago-section">
      <div className="chicago-image">
        <img src="/images/casablanca (1).jpg" alt="Little Lemon Chicago" />
      </div>
      <div className="chicago-info">
        <h2>مطعم CASABLANCA Little Lemon </h2>
        <p>
          يقع مطعم Little Lemon في قلب مدينة Casablanca، ويوفر تجربة طعام لا تُنسى بفضل الأطباق المتوسطية الطازجة والمميزة. 
          يتميز المطعم بجو دافئ وخدمة ممتازة تجعل الزوار يعودون مرارًا وتكرارًا.
        </p>
        <h3>الموقع:</h3>
        <p>123 شارع المأكولات، كازابلانكا     .casablanca. </p>

        <h3>ساعات العمل:</h3>
        <ul className="opening-hours">
          <li>الإثنين - الجمعة: 12:00 مساءً - 10:00 مساءً</li>
          <li>السبت - الأحد: 10:00 صباحًا - 11:00 مساءً</li>
        </ul>

        <h3>المميزات:</h3>
        <ul className="restaurant-features">
          <li>🍽️ أطباق متوسطية مميزة</li>
          <li>🍷 قائمة مشروبات متنوعة</li>
          <li>🎶 موسيقى حية أيام السبت</li>
          <li>🌿 خيارات نباتية</li>
        </ul>
      </div>
    </div>
  );
};

export default Casablanca;
