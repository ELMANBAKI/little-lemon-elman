import React from 'react';
import './CustomersSay.css';

const reviews = [
  {
    id: 1,
    name: 'أحمد',
    image: '/images/p1 (1).jpg',
    rating: 5,
    review: 'خدمة رائعة وطعام لذيذ! سأعود مرة أخرى بالتأكيد.'
  },
  {
    id: 2,
    name: 'سارة',
    image: '/images/p1 (2).jpg',
    rating: 4,
    review: 'التجربة كانت ممتازة، لكن أتمنى أن تكون الخدمة أسرع.'
  },
  {
    id: 3,
    name: 'محمد',
    image: '/images/p1 (3).jpg',
    rating: 5,
    review: 'أفضل مطعم جربته على الإطلاق. الجو رائع والطعام مميز.'
  },
  {
    id: 4,
    name: 'فاطمة',
    image: '/images/p1 (4).jpg',
    rating: 4,
    review: 'مطعم رائع، لكن الأسعار مرتفعة قليلاً.'
  },
  {
    id: 5,
    name: 'ياسين',
    image: '/images/p1 (5).jpg',
    rating: 5,
    review: 'الجو العام والخدمة في المطعم جعلتني أشعر وكأنني في البيت.'
  },
  {
    id: 6,
    name: 'ليلى',
    image: '/images/p1 (6).jpg',
    rating: 3,
    review: 'الطعام لذيذ، لكنني لم أحب الموسيقى الصاخبة.'
  }
];

const CustomersSay = () => {
  return (
    <div className="customers-say">
      <h2>ماذا يقول عملاؤنا؟</h2>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <img src={review.image} alt={review.name} className="customer-image" />
            <h3>{review.name}</h3>
            <div className="customer-rating">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
            <p className="customer-review">"{review.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomersSay;
