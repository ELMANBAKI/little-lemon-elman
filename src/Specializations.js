import React from "react";
import "./Specializations.css";

const specials = [
  {
    id: 1,
    title: " الغداء السريع",
    description: "استمتع بخصم 20% على جميع وجبات الغداء المتنوعة.",
    image: "/images/sand.jpg"
  },
  {
    id: 2,
    title: "عرض  البيتزا",
    description: "احصل على خصم 15% على جميع أنواع البيتزا الشهية.",
    image: "/images/piza.jpg"
  },
  {
    id: 3,
    title: "لحم مشوي",
    description: "وفر 20% على قائمة الغداء المختارة كل يوم.",
    image: "/images/minan.jpg"
  },
  {
    id: 4,
    title: "خصم السلطة",
    description: "تناول سلطات طازجة مع خصم 20% على الوجبات الصحية.",
    image: "/images/salad.jpg"
  },
  {
    id: 5,
    title: "غداء الأعمال",
    description: "استمتع بخصم 20% على وجبات الغداء للأعمال.",
    image: "/images/repa.jpg"
  },
  {
    id: 6,
    title: "عرض المشروبات ",
    description: "احصل على مشروب مجاني مع كل وجبة رئيسية.",
    image: "/images/lemon1.jpg"
  }
];

const Specializations = () => {
  return (
    <div className="specializations">
      <h2>عروضنا الخاصة</h2>
      <div className="specials-list">
        {specials.map((special) => (
          <div key={special.id} className="special-item">
            <img
              src={special.image}
              alt={special.title}
              className="special-image"
            />
            <div className="special-details">
              <h3 className="special-title">{special.title}</h3>
              <p className="special-description">{special.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specializations;
