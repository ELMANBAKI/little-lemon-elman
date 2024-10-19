import React from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css'; // استيراد أنماط مخصصة

const BookingPage = () => {
  return (
    <div className="booking-page">
      <h1>احجز طاولتك الآن </h1>
      <p>استمتع بتجربة طعام فريدة مع أفضل الأطباق والجو المريح.</p>
      <img src="/images/salad.jpg" alt="مطعم Little Lemon" className="restaurant-image" />
      <BookingForm />
    </div>
  );
};

export default BookingPage;
