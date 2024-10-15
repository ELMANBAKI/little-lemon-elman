import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // استيراد useNavigate
import { fetchAvailableTimes, fetchExistingReservations } from './Api';
import './BookingForm.css'; // استيراد أنماط مخصصة

const BookingForm = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const [availableTimes, setAvailableTimes] = useState([]);
  const [, setExistingReservations] = useState([]);
  const date = watch('date');

  // استخدام useNavigate للتنقل بين الصفحات
  const navigate = useNavigate();

  useEffect(() => {
    if (date) {
      fetchAvailableTimes(date).then(times => setAvailableTimes(times));
      fetchExistingReservations(date).then(reservations => setExistingReservations(reservations));
    }
  }, [date]);

  // دالة معالجة التقديم
  const onSubmit = (data) => {
    console.log(data);
    alert("تم حجز طاولتك بنجاح!");

    // تفريغ الحقول بعد الحجز
    reset();

    // إعادة التوجيه إلى الصفحة الرئيسية
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
      <div className="form-group">
        <label htmlFor="name">الاسم:</label>
        <input
          {...register('name', { required: 'الاسم مطلوب' })}
          id="name"
          type="text"
          className={errors.name ? 'input-error' : ''}
        />
        {errors.name && <span className="error-message">{errors.name.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="date">التاريخ:</label>
        <input
          {...register('date', { required: 'التاريخ مطلوب' })}
          id="date"
          type="date"
          className={errors.date ? 'input-error' : ''}
        />
        {errors.date && <span className="error-message">{errors.date.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="time">الوقت:</label>
        <select
          {...register('time', { required: 'الوقت مطلوب' })}
          id="time"
          className={errors.time ? 'input-error' : ''}
        >
          {availableTimes.length === 0 ? (
            <option value="">اختر التاريخ أولا</option>
          ) : (
            availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))
          )}
        </select>
        {errors.time && <span className="error-message">{errors.time.message}</span>}
      </div>

       

      <button type="submit" className="submit-button">احجز الآن</button>
    </form>
  );
};

export default BookingForm;
