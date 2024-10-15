import React from 'react';
import './Specializations.css';

const specials = [
  { 
    id: 1, 
    title: 'عرض الغداء', 
    description: 'خصم 20% على وجبات الغداء.', 
    image: '/images/piza.jpg',
  },
  { 
    id: 2, 
    title: 'عرض البيتزا', 
    description: 'خصم 15% على البيتزا.', 
    image: '/images/catscomin.jpg' 
  },
  { 
    id: 3, 
    title: 'عرض الغداء', 
    description: 'خصم 20% على وجبات الغداء.', 
    image: '/images/minan.jpg',
  },
  { 
    id: 4, 
    title: 'عرض الغداء', 
    description: 'خصم 20% على وجبات الغداء.', 
    image: '/images/salad.jpg',
  },
  { 
    id: 5, 
    title: 'عرض الغداء', 
    description: 'خصم 20% على وجبات الغداء.', 
    image: '/images/robinstickel.jpg',
  },
  { 
    id: 6, 
    title: 'عرض المشروبات', 
    description: 'احصل على مشروب مجاني مع كل وجبة.', 
    image: '/images/foto.jpg' 
  }
];

const Specializations = () => {
  return (
    <div className="specializations">
      <h2>عروضنا الخاصة</h2>
      <div className="specials-list">
        {specials.map((special) => (
          <div key={special.id} className="special-item">
            <img src={special.image} alt={special.title} className="special-image" />
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
